'use client'
import { destinationCollection } from "@/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function Destinations({params}: { params: { country:string }}) {
    const [countries, setCountries] = useState<Destination[]>([])
    useEffect(
        () =>  
         onSnapshot(destinationCollection, (snapshot: QuerySnapshot<DocumentData>) => {
         setCountries( 
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data().country,
            }
          })
         );
      }),
      []
    );
  return (
    <div>
      <h1>{countries.map((country) => (
        <div key={country.id}>
            <h1>{country.country}</h1>
        </div>
      ))}</h1>
    </div>
  )
}