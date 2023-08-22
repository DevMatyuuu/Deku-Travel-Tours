'use client'

import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { destinationCollection } from "@/controller";


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
        <p className="text-sm text-gray-500">We make traveling the most enjoyable experience.</p>
      </div>
      <div className="lg:mt-5 flex ">
        {destination?.map((destination) => (
          <div key={destination.id}>
            <p className="text-black z-50 flex justify-center">{destination.destination}</p>
            <img src={destination.media} alt='image'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularDestinations