'use client'

import { Tab } from '@/components/Tabs';
import useFirestoreData from '@/hooks/useFirestoreData';


interface Props {
    params: {
        id: string;
    };
}

export default function DestinationDetails({ params }: Props) {
    const { destination } = useFirestoreData();

    const paramsId = params.id 

    const selectedDestination = destination.find(destination => destination.id === paramsId);

    return (
        <>
        <div className='lg:mb-3'>
            {selectedDestination ? (
                <div key={selectedDestination.id}>
                    <img src={selectedDestination.detailsMedia} className='lg:w-full lg:h-[350px] bg-cover brightness-50'/>
                    <h1 className='flex lg:absolute text-white text-7xl top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{selectedDestination.destination}</h1>
                    <h1 className='flex lg:absolute text-white text-2xl top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{selectedDestination.country}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div className='flex justify-center'>
            <Tab params={paramsId}/>
        </div>
        </>
    );
}
