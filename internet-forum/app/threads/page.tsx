'use client'
import ListThreads from "../../components/ListThreads";

// export default function Threads() {
//     return (
//     <div>

//        <h1 className="font-bold text-center text-6xl">Threads</h1>

       

//        <ListThreads />
//     </div>
//     );
//   }


import Link from "next/link";
import Navbar from "../_components/navbar";

export default function Threads() {
    return (
        <main>
            <Navbar/>
            <h1 className="font-bold text-center text-6xl mb-4">Threads</h1>
            <div className="flex items-center gap-5 mb-4">
                <Link href={"/"} className="text-blue-500 hover:underline">Forum</Link>
                <p className="text-gray-700">Title</p>
            </div>
            <ListThreads />
        </main>
    );
}
  

