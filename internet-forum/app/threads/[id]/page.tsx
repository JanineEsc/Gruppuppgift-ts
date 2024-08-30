"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Thread = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

const ThreadDetail = () => {
  const { id } = useParams(); 

  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    console.log("Thread ID from URL:", id); 

    if (id) {
      const savedThreads = localStorage.getItem('threads');
      if (savedThreads) {
        const threads: Thread[] = JSON.parse(savedThreads);
        const foundThread = threads.find(thread => thread.id === id);
        setThread(foundThread || null);
      }
    }
  }, [id]);

  if (!thread) {
    return <p className="text-red-500 text-center text-8xl">Thread not found.</p>;
  }

  return (
    <main className="border-2 flex items-center justify-center p-10">
      <div className="w-full h-full grid-cols-1 bg-blue md:grid-cols-2">
        <div className="text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow-md">
              <h1 className="text-2xl font-bold mb-4">{thread.title}</h1>
              <p className="text-sm text-slate-400">{new Date(thread.timestamp).toLocaleString()}</p>
              <p className="mt-2 text-sm">{thread.content}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThreadDetail;
