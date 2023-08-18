import { UserButton } from "@clerk/nextjs";
import { Image } from "next/dist/client/image-component";
import { navLinks } from '@/constants/index'
import Link from 'next/link'
import { HiMiniBars3 } from 'react-icons/hi2'

function NavBar() {
  return (
    <div className="flex h-20 items-center justify-between mx-6">
        <Image src='' alt="logo" width={24} height={24} />
        <div className="hidden md:flex">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.route}>
                    {link.name}
                </Link>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/sign-in"/>
            <HiMiniBars3 className='md:hidden cursor-pointer h-5 w-8'/>
        </div>
    </div>
  )
}

export default NavBar