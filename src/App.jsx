
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import TicketsCard from './Components/TicketsCard/TicketsCard';

import { toast, ToastContainer} from 'react-toastify';


const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
}

const ticketPromise = fetchTickets();



function App() {

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [hiddenIds, setHiddenIds] = useState(new Set());

  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;

  const handleSelect = (ticket) => {
    if (
      hiddenIds.has(ticket.id) || inProgress.find((t) => t.id === ticket.id) || resolved.find((t) =>t.id === ticket.id)
    ) 
   

    setHiddenIds((prev) => new Set(prev).add(ticket.id));
    setInProgress((prev) => [...prev, {...ticket}

    ]);
    toast("In Progress")
  }
 
  const handleComplete = (ticketId) => {
  const found = inProgress.find((t) => t.id === ticketId);
  if (!found) return;

  setInProgress((prev) => prev.filter((t) => t.id !== ticketId));
  setResolved((prev) => [{ ...found}, ...prev]);
  setHiddenIds((prev) => new Set(prev).add(ticketId));

  toast("Completed");
};


  return (
    <>
    <Navbar></Navbar>
    <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>

    <Suspense fallback={<div>Loading tickets...</div>}>
      <TicketsCard ticketPromise={ticketPromise} onSelect={handleSelect} hiddenIds={hiddenIds} inProgress={inProgress} resolved={resolved} onComplete={handleComplete}></TicketsCard>
      
      </Suspense>

    <Footer></Footer>


    <ToastContainer/>
    </>
  )
}

export default App
