import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center bg-emerald-400 py-8 px-4 gap-x-3">
        <Link href="/" >
          Home 
        </Link>
        <Link href="/create" >
          Create 
        </Link>
        <Link href="/threads" >
          Threads
        </Link>
        
      </ul>
    </nav>
  )
}
export default Navbar