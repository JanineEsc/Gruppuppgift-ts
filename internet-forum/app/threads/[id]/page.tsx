"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const ThreadDetail = () => {
  const { id } = useParams<{ id: string }>(); 

  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    console.log("Thread ID from URL:", id); 

    if (id) {
      const savedThreads = localStorage.getItem('threads');
      if (savedThreads) {
        const threads: Thread[] = JSON.parse(savedThreads);
        const idNumber = parseInt(id, 10); 
        const foundThread = threads.find(thread => thread.id === idNumber);
        setThread(foundThread || null);
      }
    }
  }, [id]);

  if (!thread) {
    return <p className="text-red-500 text-center text-8xl">Thread not found.</p>;
  }

  return (
    <main className="bg-emerald-400 h-screen border-2 flex items-center justify-center p-10">
      <div className="w-full h-full grid-cols-1 bg-blue md:grid-cols-2">
        <div className="text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow-md">
              <h1 className="font-bold text-center text-8xl text-white">{thread.title}</h1>
              <p className="text-lg text-slate-600">{new Date(thread.creationDate).toLocaleString()}</p>
              <p className="font-bold text-start text-3xl px-7 py-3 text-white">{thread.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThreadDetail;
