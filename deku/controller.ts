import { collection, getFirestore, query, where } from 'firebase/firestore'
import { app } from './firebase'

export const db = getFirestore(app);

//DESTINATION COLLECTION
export const destinationCollection = collection(db, "destinations");

//POPULAR DESTINATION QUERY
export const popularQ = query(destinationCollection, where("rating", ">=", "4.5")); 





