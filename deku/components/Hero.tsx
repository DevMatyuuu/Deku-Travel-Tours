import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import img1 from '@/public/heroImg1.jpg'
import img2 from '@/public/heroImg2.jpg'
import img3 from '@/public/heroImg3.jpg'


function Hero() {
  return (
    <div className='h-[90vh]'>
        <div className='lg:flex grid-cols-1 gap-10 lg:w-[100%] justify-center'>
            <div className='flex-col lg:text-6xl text-2xl lg:text-start text-center font-semibold'>
                <h1>The best experience you</h1>
                <h1 className='flex lg:gap-3 gap-2 justify-center lg:justify-normal'>could ever<p className='text-blue-500 text-center lg:text-start'>imagine.</p></h1>
                <p className='text-lg font-normal lg:mt-10 break-all lg:w-[650px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Card className='lg:text-lg items-center lg:mt-24 border-black lg:h-32 lg:w-[130%]'>
                    <CardContent className='flex lg:gap-20 justify-center items-center'>
                        <div>
                            <h1>Tae</h1>
                        </div>
                        <div>
                            <h1>Tae</h1>
                        </div>
                        <div>
                            <h1>Tae</h1>
                        </div>
                    </CardContent>
                </Card>
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