'use client'

import BookPlan from "@/components/BookBox/BookPlan";
import Image from "next/image";
import BG from '@/public/homeBG2.jpg'
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <>
    <div className="flex-col">
      <Image src={BG} alt='bg' className='absolute lg:object-fit object-cover w-full lg:h-[600px] h-[50%] brightness-50 z-0 rounded-b-lg'/>
      <h1 className="flex-col text-white text-4xl lg:text-7xl text-center lg:pt-44 pt-14 absolute w-full h-screen mx-auto justify-center z-49">
        <p className="lg:mb-4">Discover the Beauty of </p>
        <p>the World</p>
      </h1>
      <div className="flex absolute w-full mx-auto justify-center lg:mt-[28%] mt-[45%]">
        <BookPlan />
      </div>
    </div>
    <div className="relative pt-[55%]">
      <Hero />
    </div>
    <div className="lg:w-100">
      <Stats />
    </div>
    <div className="pt-[10%]">
      <PopularDestinations />
    </div>
    </>
  )
}
