import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function GridCard() {
  return (
    <div className="max-w-[900px] gap-4 grid xl:grid-cols-5 grid-flow-row grid-cols-1 px-8">
    
    <Card isFooterBlurred className="w-full h-[300px] col-span-2 ">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white-100/60 uppercase font-bold">New</p>
        <h4 className="text-white-100 font-medium text-2xl">STAD & CO</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://media.gq.com/photos/63e2b84fc3e6ea31f7c7dd30/16:9/w_2560%2Cc_limit/best-shoe-brands-nike-asics-celine.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny bg-orange-100"  radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-3">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white-100/60 uppercase font-bold">Your life your style</p>
        <h4 className="text-white-100/90 font-medium text-xl">Your checklist for better fashion</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://media.glamourmagazine.co.uk/photos/65cf71e92d686ba65d63bd10/16:9/w_2580,c_limit/WORK%20BAGS%20160224%20GettyImages-1975353224_L.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src='https://i.pinimg.com/originals/d1/aa/c9/d1aac9ca68abe81dfbab955a9073167c.jpg'
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white-100/60">Channel</p>
            <p className="text-tiny text-white-100/60">Get a good deal right now!</p>
          </div>
        </div>
        <Button radius="full" className="bg-orange-100" size="sm">Get it</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
