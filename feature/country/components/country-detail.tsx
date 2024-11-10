"use client";

import React from 'react'
import Image from 'next/image';

import { useGetCountryDetail } from '@/feature/country/api/use-get-country-detail';
import { useParams } from 'next/navigation';
import { useGetCountryByCodes } from '../api/use-get-country-by-codes';
import { Badge } from '@/components/ui/badge';


export default function CountryDetail() {
  const GET_COUNTRY_DETAIL_FIELDS_QUERY = "flags,cca3,name,capital,population,region,subregion,tld,currencies,languages,borders"
  const GET_BORDER_COUNTRY_FIELDS_QUERY = "name";
  const code = useParams().code as string;
  const { data: allCountryDetailQuery, isLoading: isGetCountryDetailLoading } = useGetCountryDetail(code, GET_COUNTRY_DETAIL_FIELDS_QUERY);

  const borderCodes = allCountryDetailQuery?.data[0].borders.join(",");
  const enabled = !!borderCodes;
  console.log(borderCodes, enabled);

  const { data: borderCountryQuery, isLoading: isGetBorderCountryLoading } = useGetCountryByCodes(borderCodes || code, GET_BORDER_COUNTRY_FIELDS_QUERY, enabled);

  if (isGetCountryDetailLoading || isGetBorderCountryLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (!allCountryDetailQuery) {
    return (
      <div>Failed to Fetch country information</div>
    )
  }

  const countryDetail = allCountryDetailQuery.data[0];
  const nativeNames = Object.values(countryDetail.name.nativeName).map((ns) => ns.common).join(", ");
  const currencies = Object.values(countryDetail.currencies).map((currency) => currency.name).join(", ");
  const languages = Object.values(countryDetail.languages).join(", ");

  return (
    <main className="size-full flex justify-between">
      <div className="relative w-5/12 h-[400px] rounded-lg">
        <Image
          src={countryDetail.flags.svg}
          alt={countryDetail.flags.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="w-6/12 flex flex-col gap-y-8">
        <h1 className="w-[400px] text-4xl font-bold text-darkText">{countryDetail.name.common}</h1>

        <table className="grid grid-cols-2 justify-between gap-x-6 text-darkText text-lg font-bold">
          <ul className="flex flex-col gap-y-1 flex-wrap">
            <li>
              Native Name:
              <span className="font-semibold text-neutral-600"> {nativeNames}
              </span>
            </li>
            <li>
              Population:
              <span className="font-semibold text-neutral-600"> {countryDetail.population}
              </span>
            </li>
            <li>
              Region:
              <span className="font-semibold text-neutral-600"> {countryDetail.region}
              </span>
            </li>
            <li>
              Sub Region:
              <span className="font-semibold text-neutral-600"> {countryDetail.region}
              </span>
            </li>
            <li>
              Capital:
              <span className="font-semibold text-neutral-600"> {countryDetail.capital}
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-1 flex-wrap">
            <li>
              Top Level Domain:
              <span className="font-semibold text-neutral-600"> {countryDetail.tld} </span>
            </li>
            <li>
              Currencies:
              <span className="font-semibold text-neutral-600"> {currencies} </span>
            </li>
            <li>
              Languages:
              <span className="font-semibold text-neutral-600"> {languages} </span>
            </li>
          </ul>
        </table>

        <div className="flex flex-wrap items-center gap-3 w-full" >
          <span className="font-semibold text-darkText">Border Countries:</span>
          {borderCountryQuery ?
            borderCountryQuery.data.map((country) => {
              return (
                <Badge variant="outline" className="flex items-center justify-center  text-center px-6 py-1 text-base rounded-sm">
                  {country.name.common}
                </Badge>
              )
            }) :
            <span className="text-muted-foreground font-semibold"> None </span>
          }
        </div>
      </div>
    </main>
  )
}
