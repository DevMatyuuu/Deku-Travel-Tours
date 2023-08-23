import React from 'react'
import { Card, CardContent } from './ui/card'

function Stats() {
  return (
    <div className='flex justify-center lg:w-full'>
        <Card className='lg:text-lg items-center lg:mt-24 border-blue-500 rounded-full lg:h-40 lg:w-[70%]'>
            <CardContent className='flex lg:gap-60 justify-center items-center lg:pt-10'>
                <div>
                    <h1>Tae</h1>
                 </div>
                <div>
                    <h1>Tae</h1>
                 </div>
                <div>
                     <h1>Tae</h1>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Stats