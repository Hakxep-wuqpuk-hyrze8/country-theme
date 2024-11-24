"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CountryCardProps {
  code: string;
  name: string;
  population: number;
  region: string;
  capital?: Array<string>;
  image: string;
  imageAlt: string;
};

export default function CountryCard({ code, name, population, region, capital, image, imageAlt }: CountryCardProps) {
  const router = useRouter();

  const handleNavigation = (code: string) => {
    router.push(`/${code}`)
  };

  return (
    <Card onClick={() => handleNavigation(code)} className="rounded-lg shadow-md cursor-pointer dark:bg-blue-900">
      <div className="relative w-full h-[260px] sm:h-[300px] md:h-[220px] xl:h-[220px] rounded-lg">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-fill lg:object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-texts-dark dark:text-texts-light font-bold">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col text-texts-dark dark:text-texts-light font-semibold">
        <p>Population: <span className='text-neutral-700 dark:text-neutral-300'>{population}</span> </p>
        <p>Region: <span className='text-neutral-700 dark:text-neutral-300'>{region}</span> </p>
        <p>Capital:{" "}
          <span className='text-neutral-700 dark:text-neutral-300'>{capital?.map(c => { return c + " " })}</span>
        </p>
      </CardContent>
    </Card>
  )
}
