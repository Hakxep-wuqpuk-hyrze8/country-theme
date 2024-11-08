"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};

export default function CountryCard({ name, population, region, capital, flag }: CountryCardProps) {
  return (
    <Card className="rounded-lg">
      <div className="relative w-full h-[220px] rounded-lg">
        <Image
          src={flag}
          alt={`${name} flag`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-darkText font-bold">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col text-darkText font-semibold">
        <p>Population: <span className='text-neutral-600'>{population}</span> </p>
        <p>Region: <span className='text-neutral-600'>{region}</span> </p>
        <p>Capital: <span className='text-neutral-600'>{capital}</span> </p>
      </CardContent>
    </Card>
  )
}
