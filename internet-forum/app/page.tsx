import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <main className="bg-emerald-400 h-screen">
      <Navbar/>
      <h1 className="font-bold text-center text-6xl">Birds & Bees</h1>
      <div className="m-5 bg-gray-300 w-1/2 mx-auto ">
        <h2 className="font-bold text-start text-3xl px-7 py-3">Threads</h2>
        <div className="font-bold text-start text-xl px-5 py-3">
          <ul className="bg-gray-300 p-2">
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 1</li>
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 2</li>
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 3</li>
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 4</li>
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 5</li>
            <li className="mb-2 bg-slate-50 p-2 border border-black">Tråd 6</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
