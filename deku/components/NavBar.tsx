'use client'

import { UserButton } from "@clerk/nextjs";
import { Image } from "next/dist/client/image-component";
import { navLinks } from '@/constants/index'
import Link from 'next/link'
import { HiMiniBars3 } from 'react-icons/hi2'
import {Navbar} from '@material-tailwind/react'
import logo from '@/public/dekuLogo.png'
import { useState } from "react";

function NavBar() {
    const[navColor, setNavColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 600) {
            setNavColor(true);
        } else {
            setNavColor(false)
        }
    }
    if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeColor)
    }


  return (
    <Navbar className={`${navColor ?  'bg-white'  : 'bg-transparent z-50' } z-50 fixed lg:h-max border-none shadow-none`}>
        <div className="flex h-20 items-center justify-between lg:mx-32 mx-3">
            <Image src={logo} alt="logo" width={28} height={28} />
            <div className="hidden lg:flex lg:gap-28 lg:font-bold">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.route}>
                        <div className={`${navColor ? 'text-black hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>
                            {link.name}
                        </div>
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