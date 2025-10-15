import React, { use } from 'react';

const TicketsCard = ({ ticketPromise, onSelect, hiddenIds, inProgress, resolved, onComplete }) => {
  const tickets = use(ticketPromise);
  const visible = tickets.filter((t) => !hiddenIds.has(t.id));


  
  const leftCol = visible.slice(0, 5);
  const rightCol = visible.slice(5, 10);

  const StatusBadge = ({ status }) => (
    <span
      className={`px-3 py-1 rounded-2xl text-sm font-medium ${
        status === 'Open'
          ? 'bg-green-200 text-green-700'
          : status === 'In Progress'
          ? 'bg-yellow-200 text-yellow-700'
          : status === 'Resolved'
          ? 'bg-blue-200 text-blue-700'
          : status === 'Pending'
          ? 'bg-gray-200 text-gray-700'
          : 'bg-gray-50 text-gray-700'
      }`}
    >
      {status}
    </span>
  );

  const PriorityText = ({ priority }) => (
    <span
      className={`font-semibold ${
        priority === 'Urgent'
          ? 'text-red-600'
          : priority === 'High'
          ? 'text-orange-900'
          : priority === 'Medium'
          ? 'text-orange-300'
          : 'text-gray-600'
      }`}
    >
      {priority} Priority
    </span>
  );

  const Card = ({ t }) => (
    <div
      key={t.id}
      className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 cursor-pointer"
      onClick={() => onSelect(t)}
      title="Click to add to Task Status"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-gray-800">{t.title}</h3>
        <StatusBadge status={t.status} />
      </div>

      <p className="text-sm text-gray-600 mt-2">{t.description}</p>

      <div className="mt-3 flex flex-wrap items-center text-sm text-gray-600 justify-between">
        <span>#{t.id}</span>
        <PriorityText priority={t.priority} />
        <span className="hidden sm:inline">{t.customer}</span>
        <span>{new Date(t.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );

  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <section className='w-full md:w-4/6 '>
          <h2 className='text-lg font-semibold mb-4'>Customer Tickets</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-4'>
              {leftCol.map((t) => (
                <Card key={t.id} t={t} />
              ))}
            </div>

            <div className='space-y-4'>
              {rightCol.map((t) => (
                <Card key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>


        <aside className="w-full md:w-2/6">
          <div className="rounded-xl border border-slate-200 bg-gray-50 p-4 shadow-sm">

            <h3 className="text-[15px] font-semibold text-black">Task Status</h3>
            <p className="text-xs text-slate-500 mt-1">Select a ticket to add to Task Status</p>

            <div className="mt-4">
              {
              inProgress.length === 0 ? 
              (
                <p className="text-xs text-slate-500"></p>
              ) : (
                <ul className="space-y-2">
                  {
                  inProgress.map((t) => (
                    <li key={t.id} className="flex items-center gap-2">
                      <span className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800">
                        {t.title}
                      </span>
                      <button
                        onClick={() => onComplete(t.id)}
                        className="px-3 py-2 rounded-md bg-green-600 text-white text-xs font-semibold"
                      >
                        Complete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-6">
              <h4 className="text-[15px] font-semibold text-black mb-2">Resolved Task</h4>
              {resolved.length === 0 ? (
                <p className="text-xs text-gray-500">No resolved task yet.</p>
              ) : (
                <ul className="space-y-2">
                  {resolved.map((t) => (
                    <li
                      key={t.id}
                      className="bg-white/70 border border-gary-200 rounded-md px-3 py-2 text-sm text-gray-700"
                    >
                      {t.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default TicketsCard;
