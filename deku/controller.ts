import { collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

export const db = getFirestore(app);

//DESTINATION COLLECTION
export const destinationCollection = collection(db, "destinations");
