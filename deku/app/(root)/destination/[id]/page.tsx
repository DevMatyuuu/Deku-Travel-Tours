'use client'

import { destinationCollection } from '@/controller';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';


interface Props {
    params: {
        id: string;
    };
}

export default function DestinationDetails({ params }: Props) {
    const [destinationData, setDestinationData] = useState<Destination[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(destinationCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setDestinationData(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                })
            );
        });
        return () => unsubscribe();
    }, []);

    const selectedDestination = destinationData.find(destination => destination.id === params.id);

    return (
        <>
        <div>
            {selectedDestination ? (
                <div key={selectedDestination.id}>
                    <img src={selectedDestination.detailsMedia} className='lg:w-full lg:h-[400px] bg-cover brightness-50'/>
                    <h1 className='flex lg:absolute text-white text-7xl top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{selectedDestination.destination}</h1>
                    <h1 className='flex lg:absolute text-white text-2xl top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{selectedDestination.country}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div>

        </div>
        </>
    );
}
