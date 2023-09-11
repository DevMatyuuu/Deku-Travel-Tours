import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { popularQ, destinationCollection } from "@/controller";

function useFirestoreData() {
    const [popular, setPopular] = useState<Destination[]>([]);
    const [destination, setDestination] = useState<Destination[]>([]);

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

  useEffect(
    () => {
    const unsubscribe = onSnapshot(destinationCollection, (snapshot: QuerySnapshot<DocumentData>) => {
     setDestination( 
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
  
  return {popular, destination};
}

export default useFirestoreData