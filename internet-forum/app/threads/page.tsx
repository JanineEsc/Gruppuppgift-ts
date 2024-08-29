import ThreadComponent from "@/components/ThreadComponent";
import Link from "next/link";

export default function Threads() {
    return (
        <main>
            {/* Navbar */}
            <h1 className="font-bold text-center text-6xl mb-4">Threads</h1>
            <div className="flex items-center gap-5 mb-4">
                <Link href={"/"} className="text-blue-500 hover:underline">Forum</Link>
                <p className="text-gray-700">Title</p>   
            </div>
            <ThreadComponent/>
            <ThreadComponent/>
            <ThreadComponent/>
            <ThreadComponent/>
        </main>
    );
}
