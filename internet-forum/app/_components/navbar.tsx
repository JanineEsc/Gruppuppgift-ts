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
<<<<<<< HEAD

=======
        
>>>>>>> 43bc51374a78076ad5ce1b5938e0a32d1486b6ca
      </ul>
    </nav>
  )
}
export default Navbar