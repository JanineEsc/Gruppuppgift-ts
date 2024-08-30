'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const CreateThread = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ThreadCategory>('Thread'); // Default category
  const [creator, setCreator] = useState<User>({ userName: 'defaultUser', password: 'defaultPassword' }); // Default user


  const router = useRouter();

  const handleCreateThread = () => {
    const newThread: Thread = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID
      title,
      category,
      creationDate: new Date().toISOString(),
      description,
      creator,
    };

    const savedThreads = localStorage.getItem('threads');
    const threads = savedThreads ? JSON.parse(savedThreads) : [];
    threads.push(newThread);
    localStorage.setItem('threads', JSON.stringify(threads));

    console.log('Saved threads:', threads);

    // Navigate to /threads page
    // router.push('/threads');
  };



  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="w-full h-full grid-cols-1 bg-blue md:grid-cols-2">
        <div className="bg-[#16202a] h-full text-white flex items-center justify-center flex-col">
          <div className="my-4"></div>

          <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Skapa en ny tråd</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleCreateThread(); }}>
              <div className="mb-4">
                <label htmlFor="rubrik" className="block mt-4 text-sm text-slate-400">Namn på tråd*</label>
                <input
                  className="mt-2 mb-4 bg-transparent rounded-full border p-2"
                  type="text"
                  id="rubrik"
                  placeholder="Namn på tråd"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="kategori" className="block mt-4 text-sm text-slate-400">Kategori*</label>
                <select
                  className="mt-2 mb-4 bg-transparent rounded-full border p-2"
                  id="kategori"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ThreadCategory)} // Type casting here
                >
                  <option className="bg-black" value="Thread">Thread</option>
                  <option className="bg-black" value="QNA">QNA</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="content" className="block mt-4 text-sm text-slate-400">Innehåll*</label>
                <textarea
                  className="mt-2 mb-4 bg-transparent rounded-lg w-full h-32 border p-2"
                  id="content"
                  placeholder="Skriv ditt innehåll här"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="w-full mt-6 bg-indigo-700 rounded-full hover:bg-indigo-700">Skapa ny tråd</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CreateThread;