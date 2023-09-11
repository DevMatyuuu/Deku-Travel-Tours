'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import useFirestoreData from "@/hooks/useFirestoreData"

interface Props {
    params: string;
}

export function Tab({params} : Props) {
    const { destination } = useFirestoreData();

    const selectedDestination = destination.find(destination => destination.id === params);
  return (
    <>
    {selectedDestination ? 
        <Tabs defaultValue='about' className="w-[70%] h-[60vh] lg:mt-3">
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="gallery">Book</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
            <Card>
            <CardHeader>
                <CardTitle className="lg:text-4xl">About {selectedDestination.destination}</CardTitle>
                <CardDescription>
                    {selectedDestination.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <h1 className='text-lg'>Continent: {selectedDestination.continent}</h1> 
                </div>
                <div className="space-y-1">
                    <h1></h1>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save changes</Button>
            </CardFooter>
            </Card>
        </TabsContent>
        <TabsContent value="gallery">
            <Card>
            <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                Change your password here. After saving, you'll be logged out.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save password</Button>
            </CardFooter>
            </Card>
        </TabsContent>
        </Tabs> 
    : 
    <div>
        <h1>Loading...</h1>
    </div> }
    
    </>
  )
}
