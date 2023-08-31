'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { DestinationBox } from './DestinationBox'
import { DatePicker } from './DatePicker'
import { AccomodationCount } from "./AccomodationCount"


function BookPlan() {
  return (
    <div className='lg:w-[900px] z-50'>
        <Card className='lg:py-12 py-10 px-12 rounded-2xl lg:px-6 border-black border-y-2 border-x-2 z-49'>
          <CardHeader>
            <CardTitle>Book your travel now!</CardTitle>
              <CardDescription></CardDescription>
               </CardHeader>
                  <CardContent className='lg:flex grid-cols-1 gap-10 '>
                    <div>
                        <h1 className="lg:mb-2 lg:text-sm lg:ml-2">Choose Destination:</h1>
                        <DestinationBox />
                     </div>
                     <div>
                        <h1 className="lg:mb-2 lg:text-sm lg:ml-2">Check-in - Check-out:</h1>
                        <DatePicker />
                     </div>
                     <div>
                        <h1 className="lg:mb-2 lg:text-sm lg:ml-2">Accomodation:</h1>
                        <AccomodationCount/>
                     </div>
                     <div>
                        <h1 className="lg:mb-7"></h1>
                        <Button className="lg:flex grid mx-auto bg-blue-500 hover:bg-sky-400">Search</Button>
                     </div>
                  </CardContent>
                  <CardFooter>
                 </CardFooter>
        </Card>
    </div>
  )
}

export default BookPlan