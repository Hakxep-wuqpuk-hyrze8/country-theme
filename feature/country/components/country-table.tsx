"use client"

import { useGetAllCountry } from '../api/use-get-all-country';
import { useGetCountry } from '../api/use-get-country';
import { useSearchParams } from 'next/navigation';
import CountryCard from './country-card';
import useDebounce from '@/hooks/use-debounce';

export default function CountryTable() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const region = searchParams.get('region')
  const FIELDSQUERY = "name,capital,population,region,flags";
  const isSearched = !!name;

  const debouncedName = useDebounce(name, 1000);

  const { data: allCountryQuery } = useGetAllCountry(FIELDSQUERY, !isSearched);
  const { data: countryQuery } = useGetCountry(debouncedName || "", FIELDSQUERY, isSearched);

  let filteredCountry;

  if (!debouncedName) {
    filteredCountry = allCountryQuery?.data;
    if (region && filteredCountry) {
      filteredCountry = filteredCountry.filter((country) => country.region === region);
    }

    return (
      <div className="grid grid-cols-4 gap-8">
        {filteredCountry?.map((data, index) => {
          return (
            <CountryCard key={index} name={data.name.official} image={data.flags.svg} region={data.region} capital={data.capital} population={data.population} />
          )
        })}
      </div>
    )
  }

  filteredCountry = countryQuery?.data;
  if (region && filteredCountry) {
    filteredCountry = filteredCountry.filter((country) => country.region === region);
  }

  return (
    <div className="grid grid-cols-4 gap-8">
      {filteredCountry?.map((data, index) => {
        return (
          <CountryCard key={index} name={data.name.official} image={data.flags.svg} region={data.region} capital={data.capital} population={data.population} />
        )
      })}
    </div>
  )
}
