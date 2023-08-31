'use client'

import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { popularQ } from "@/controller";
import { useRouter } from "next/navigation";
import {AiFillStar} from 'react-icons/ai'


function PopularDestinations() {
  const [popular, setPopular] = useState<Destination[]>([]);

    useEffect(
      () => {
      const unsubscribe = onSnapshot(popularQ, (snapshot: QuerySnapshot<DocumentData>) => {
       setPopular( 
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
       );
    });
    return () => unsubscribe();
  },
    []
  );

  const popularDes = popular.reverse()

  const router = useRouter();

  const seeMore = (id: string | undefined) => {
    router.push(`/destination/${id}`)
  }
  return (
    <section>
      <div className="flex-col justify-center text-center lg:text-5xl lg:font-extrabold">
        <h1 className="lg:mb-3">Popular Destinations</h1>
        <p className="text-lg text-gray-500 font-normal">We make travel easy and effortless</p>
      </div>
      <div className="lg:pt-16 grid lg:gap-10 lg:grid-cols-4 lg:w-[81%] mx-auto">
      {popularDes.map((popular) => (
        <>
        <div onClick={() => seeMore(popular.id)} key={popular.id} className="hover:scale-105  hover:duration-300 cursor-pointer lg:w-80 lg:h-80">
            <img src={popular.media} className="lg:h-80 lg:w-80 object-fit rounded-xl z-49 border-black group-hover:blur-sm"/>
            <div className="lg:flex text-white backdrop-brightness-[20%] backdrop-opacity-40 rounded-b-xl lg:bottom-16 lg:relative lg:w-80 z-50 lg:h-16">
                <p className="lg:w-40 lg:ml-5 lg:pt-2">{popular.destination}</p>
                <p className="lg:absolute lg:w-40 lg:ml-5 lg:pt-7">{popular.country}</p>
                <p className="lg:ml-20 lg:pt-2 flex items-center gap-1">{popular.rating}<AiFillStar /></p>
            </div>
        </div>
        </>
    ))}
    </div>
    </section>
  )
}

export default PopularDestinations