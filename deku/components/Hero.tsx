import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import img1 from '@/public/heroImg1.jpg'
import img2 from '@/public/heroImg2.jpg'
import img3 from '@/public/heroImg3.jpg'


function Hero() {
  return (
    <div className='h-[65vh]'>
        <div className='lg:flex grid-cols-1 gap-10 lg:w-[100%] justify-center'>
            <div className='flex-col lg:text-6xl text-2xl lg:text-start text-center font-semibold'>
                <h1>The best experience you</h1>
                <h1 className='flex lg:gap-3 gap-2 justify-center lg:justify-normal'>could ever<p className='text-blue-500 text-center lg:text-start'>imagine.</p></h1>
                <p className='text-lg font-normal lg:mt-10 break-all lg:w-[650px] indent-8 text-justify'>At our travel agency, we are dedicated to curating journeys that embody "The best experience you could ever imagine." With meticulous attention to detail and a passion for crafting unforgettable moments, we design travel itineraries that transcend expectations. From breathtaking destinations to luxurious accommodations, every element is carefully orchestrated to provide our clients with unparalleled adventures that leave them in awe. Our commitment to delivering the utmost in travel excellence ensures that every trip we create becomes a remarkable and cherished memory, surpassing even the most vivid dreams of our discerning travelers.</p>
            </div>
            <div className='flex justify-center mt-5 lg:gap-5 lg:h-screen'>
                <div className='flex gap-6 lg:flex-col'>
                    <div>
                        <Image src={img1} alt=''  className='rounded-full h-56 w-32 lg:h-72 lg:w-44'/>
                    </div>
                    <div className='lg:ml-[210px] lg:mt-[-230px]'>
                        <Image src={img2} alt='' className='rounded-full h-56 w-32 lg:h-72 lg:w-44'/>
                    </div>
                    <div className='lg:ml-[420px] lg:mt-[-230px]'>
                        <Image src={img3} alt=''  className='rounded-full h-56 w-32 lg:h-72 lg:w-44'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero