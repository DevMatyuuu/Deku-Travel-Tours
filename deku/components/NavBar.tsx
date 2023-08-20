'use client'

import { UserButton } from "@clerk/nextjs";
import { Image } from "next/dist/client/image-component";
import { navLinks } from '@/constants/index'
import Link from 'next/link'
import { HiMiniBars3 } from 'react-icons/hi2'
import {Navbar} from '@material-tailwind/react'

function NavBar() {
  return (
    <Navbar className="z-50 sticky lg:h-max bg-transparent border-none shadow-none">
        <div className="flex h-20 items-center justify-between mx-16">
            <Image src='' alt="logo" width={24} height={24} />
            <div className="hidden lg:flex lg:gap-28 text-white lg:font-bold">
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
    </Navbar>
  )
}

export default NavBar