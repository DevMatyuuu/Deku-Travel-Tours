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
        <Card className='lg:py-12 py-48 px-32 rounded-2xl lg:px-10 border-black border-y-2 border-x-2 z-50'>
          <CardHeader>
            <CardTitle>Book your travel now!</CardTitle>
              <CardDescription></CardDescription>
               </CardHeader>
                  <CardContent className='flex gap-3 '>
                     <DestinationBox />
                     <DatePicker />
                     <AccomodationCount />
                     <Button>Search</Button>
                  </CardContent>
                  <CardFooter>
                 </CardFooter>
        </Card>
    </div>
  )
}

export default BookPlan