import React, { useEffect, useState } from 'react';

type Thread = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

function ListThreads() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedThreads = localStorage.getItem('threads');
    if (savedThreads) {
      setThreads(JSON.parse(savedThreads));
    } else {
      setError('Inga trådar hittades i localStorage.');
    }
  }, []);

  const deleteThread = (id: string) => {
    const updatedThreads = threads.filter(thread => thread.id !== id);
    setThreads(updatedThreads);
    localStorage.setItem('threads', JSON.stringify(updatedThreads));

    console.log('Updated threads:', updatedThreads);
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="w-full h-full grid-cols-1 bg-blue md:grid-cols-2">
        <div className="bg-[#16202a] h-full text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow-md">
              <h1 className="text-2xl font-bold mb-4">Lista av trådar</h1>
              {error ? (
                <p className="text-red-500 text-xs italic">{error}</p>
              ) : (
                threads.map(thread => (
                  <div key={thread.id} className="w-96 mb-4 p-4 border border-white rounded-lg">
                    <h2 className="text-xl font-bold">{thread.title}</h2>
                    <p className="text-sm text-slate-400">{new Date(thread.timestamp).toLocaleString()}</p>
                    <p className="mt-2 text-sm">{thread.content}</p>
                    <button
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => deleteThread(thread.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListThreads;