'use client'

import BookPlan from "@/components/BookBox/BookPlan";


export default function Home() {
  return (
    <div>
      <h1 className="flex-col text-white text-4xl lg:text-7xl text-center pt-20 absolute w-full h-screen mx-auto justify-center z-50">
        <p className="lg:mb-4">Discover the Beauty of </p>
        <p>the World</p>
      </h1>
      <div className="flex absolute w-full mx-auto justify-center lg:mt-[24%] mt-[50%]">
        <BookPlan />
      </div>
    </div>
  )
}
