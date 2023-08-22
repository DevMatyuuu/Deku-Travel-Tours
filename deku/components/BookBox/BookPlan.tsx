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
        <Card className='lg:py-12 py-10 px-12 rounded-2xl lg:px-10 border-black border-y-2 border-x-2 z-49'>
          <CardHeader>
            <CardTitle>Book your travel now!</CardTitle>
              <CardDescription></CardDescription>
               </CardHeader>
                  <CardContent className='lg:flex grid-cols-1 gap-5 '>
                     <DestinationBox />
                     <DatePicker />
                     <AccomodationCount/>
                     <Button className="lg:flex grid mx-auto bg-blue-500 hover:bg-sky-400">Search</Button>
                  </CardContent>
                  <CardFooter>
                 </CardFooter>
        </Card>
    </div>
  )
}

export default BookPlan