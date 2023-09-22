import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Mountain } from "lucide-react"
import Image from "next/image"
import obmouth from "public/obmouth.png"
import oblogo from "public/ob-logo.png"
import obbanner from "public/ob-banner.png"
import obbannerv1 from "public/ob-banner-v1.png"

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
        <div className="container flex items-center justify-between">
            <Link className="flex gap-1" href="/"> 
            <Image 
            src={obbannerv1} 
            width={150} 
            height={100}
            alt="ob-banner"
            />
            </Link>
            <Link className={buttonVariants()} href="/login">Log in</Link>
        </div>
    </div>
  )
}

export default Navbar