import React, { useEffect, useState } from 'react';

const TicketsCard = () => {
    const [tickets, setTickets] = useState([]);

    useEffect( () =>{
        fetch('/tickets.json')
        .then((res) => res.json())
        .then((data) => setTickets(data))
    },

    []

    );

    const leftCol = tickets.slice(0,5);
    const rightCol = tickets.slice(5,10);

    return (
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row gap-6'>
                <section className='w-full md:w-4/6 '>
                    <h2 className='text-lg font-semibold mb-4'>Customer Tickets</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-4'>
                            {
                               leftCol.map( (t) => (
                                <div key={t.id} className='bg-white rounded-lg border border-gray-200 shadow-sm p-4'>
                                    <div className='flex items-start justify-between gap-3'>
                                        <h3 className='text-[15px] font-semibold text-gray-800'>
                                            {t.title}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-2xl text-sm font-medium ${t.status === 'Open' ? "bg-green-200 text-green-700" : t.status === "In Progress" ? "bg-yellow-200 text-yellow-700" : 
                                        t.status === "Resolved" ?
                                        "bg-blue-200 text-blue-700" :
                                        t.status === "Pending" ? 
                                        "bg-gray-200 text-gray-700" : "bg-gray-50 text-gray-700"
                                     }`}
                                       
                                        >
                                             {t.status}
                                        </span>

                                    </div>

                                    <p className='text-sm text-gray-600 mt-2'>{t.description}</p>

                                    <div className='mt-3 flex flex-wrap items-center text-sm text-gray-600 justify-between'>

                                        <span>#{t.id}</span>
                                        <span className={
                                            `font-semibold ${
                                                 t.priority === "Urgent"
                                                ? "text-red-600"
                                                : t.priority === "High"
                                                ? "text-orange-900"
                                                : t.priority === "Medium"
                                                ? "text-orange-300"
                                                : t.priority === "Low"
                                                ? "text-gray-600"
                                                : "text-gray-600"
                                            }`}
                                        >
                                            {t.priority} Priority
                                        </span>

                                        <span className='hidden sm:inline'>
                                            {t.customer}
                                        </span>
                                        <span>
                                            {new Date(t.createdAt).toLocaleDateString()}
                                        </span>

                                    </div>
                                </div>
                               ))
                            }

                        </div>
                        

                    <div className='space-y-4'>
                            {
                               rightCol.map( (t) => (
                                <div key={t.id} className='bg-white rounded-lg border border-gray-200 shadow-sm p-4'>
                                    <div className='flex items-start justify-between gap-3'>
                                        <h3 className='text-[15px] font-semibold text-gray-800'>
                                            {t.title}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-2xl text-sm font-medium ${t.status === 'Open' ? "bg-green-200 text-green-700" : t.status === "In Progress" ? "bg-yellow-200 text-yellow-700" : 
                                        t.status === "Resolved" ?
                                        "bg-blue-200 text-blue-700" :
                                        t.status === "Pending" ? 
                                        "bg-gray-200 text-gray-700" : "bg-gray-50 text-gray-700"
                                     }`}
                                       
                                        >
                                             {t.status}
                                        </span>

                                    </div>

                                    <p className='text-sm text-gray-600 mt-2'>{t.description}</p>

                                    <div className='mt-3 flex flex-wrap items-center text-sm text-gray-600 justify-between'>

                                        <span>#{t.id}</span>
                                        <span className={
                                            `font-semibold ${
                                                 t.priority === "Urgent"
                                                ? "text-red-600"
                                                : t.priority === "High"
                                                ? "text-orange-900"
                                                : t.priority === "Medium"
                                                ? "text-orange-300"
                                                : t.priority === "Low"
                                                ? "text-gray-600"
                                                : "text-gray-600"
                                            }`}
                                        >
                                            {t.priority} Priority
                                        </span>

                                        <span className='hidden sm:inline'>
                                            {t.customer}
                                        </span>
                                        <span>
                                            {new Date(t.createdAt).toLocaleDateString()}
                                        </span>

                                    </div>
                                </div>
                               ))
                            }

                        </div>
                        
                    </div>
                </section>


                

            </div>
            
        </main>

        
    );
};

export default TicketsCard;