'use client'

import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { destinationCollection } from "@/controller";
import { Card, CardContent } from "./ui/card";


function PopularDestinations() {
  const [destination, setDestination] = useState<Destination[]>([]);

    useEffect(
      () => 
       onSnapshot(destinationCollection, (snapshot: QuerySnapshot<DocumentData>) => {
       setDestination( 
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
       );
    }),
    []
  );
  return (
    <section>
      <div className="flex-col justify-center text-center lg:text-5xl lg:font-extrabold">
        <h1 className="lg:mb-3">Popular Destinations</h1>
        <p className="text-lg text-gray-500 font-normal">We make travel easy and effortless</p>
      </div>
      <div className="lg:pt-16 flex lg:gap-10 justify-center">
        {destination?.map((destination) => (
          <div key={destination.id} className="hover:scale-105 hover:duration-300">
                <img src={destination.media} className="lg:h-80 lg:w-80 object-fit rounded-xl z-49 border-black"/>
                <div className="lg:flex text-white backdrop-brightness-50 backdrop-opacity-40  lg:bottom-14 lg:relative z-50 lg:h-14">
                  <p className="lg:w-40 lg:ml-5 lg:pt-0 ">{destination.destination}</p>
                  <p className="lg:absolute lg:w-40 lg:ml-5 lg:pt-6 ">{destination.country}</p>
                  <p className="lg:ml-24 lg:pt-3">{destination.rating}</p>
                </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularDestinations