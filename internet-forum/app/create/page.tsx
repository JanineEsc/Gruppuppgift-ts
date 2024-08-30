import CreateThread from '../../components/CreateThread';
import Navbar from "../_components/navbar";

export default function Create() {
    return (
      <main className="bg-emerald-400 h-screen">

         <Navbar/>
          <h1 className="font-bold text-center text-8xl text-white">Create Thread</h1>
          <div className="m-5  w-1/2 mx-auto ">
        <h2 className="font-bold text-start text-3xl px-7 py-3 text-white">Begin topic</h2>
        <div className="font-bold text-start text-xl px-5 py-3">
          <CreateThread />
        </div>
      </div>
      </main>
    );
  }
  