import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Mountain } from "lucide-react"
import Image from "next/image"
import oblogo from "public/oblogo.png"
import obmouth from "public/obmouth.png"

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
        <div className="container flex items-center justify-between">
            <Link className="flex gap-1" href="/"> 
            <Image 
            src={obmouth} 
            width={25} 
            height={25}
            alt="ob-logo"
            /> 
            obcave
            </Link>
            <Link className={buttonVariants()} href="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navbar