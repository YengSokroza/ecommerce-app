
import { Card } from 'flowbite-react';

import { DetailProductType } from '@/libs/definition';

export default function CardDetailComponent({name,image,desc} : DetailProductType) {
  return (
    <Card className="md:w-[800px] grid sm:grid-cols-2 p-4 grid-cols-1 dark:bg-white-100 border-none " renderImage={() => (
        <img
          src={image || "defaul Image"}
          className="object-contain w-[300px] h-[300px] overflow-hidden mx-auto self-center"
        />
      )} >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
    </Card>
  );
}
