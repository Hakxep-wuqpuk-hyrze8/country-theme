"use client"

import { Skeleton } from '@/components/ui/skeleton';
import useDebounce from '@/hooks/use-debounce';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useGetAllCountry } from '../api/use-get-all-country';
import { useGetCountryByName } from '../api/use-get-country-by-name';
import CountryCard from './country-card';
import PaginationBar from './pagination-bar';
import Image from 'next/image';

export default function CountryTable() {
  const FIELDSQUERY = "name,capital,population,region,flags,cca3";
  const PERPAGE = 12;

  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const region = searchParams.get('region')
  const pageIdParam = useParams().pageId as string;
  const page = pageIdParam ? parseInt(pageIdParam, 10) : 1;

  const queryParams = Object.fromEntries(searchParams.entries());

  const isSearched = !!name;
  const debouncedName = useDebounce(name, 1000);

  const { data: allCountryQuery, isLoading: isAllCountryQueryLoading } = useGetAllCountry(FIELDSQUERY, !isSearched);
  const { data: countryQuery, isLoading: isCountryQueryLoading } = useGetCountryByName(debouncedName || "", FIELDSQUERY, isSearched);

  if (isAllCountryQueryLoading || isCountryQueryLoading) {
    return (
      <div className="grid grid-cols-4 gap-8">
        {Array.from({ length: PERPAGE }).map((_, i) => {
          return (
            <Skeleton key={i} className="w-[330px] h-[400px]" />
          )
        })}
      </div>
    );
  }

  let filteredCountry: CountryType[] | undefined;
  if (!debouncedName) {
    filteredCountry = allCountryQuery?.data;
  } else {
    filteredCountry = countryQuery?.data;
  }

  if (region && filteredCountry) {
    filteredCountry = filteredCountry.filter((country) => country.region === region);
  }

  const totalItems = filteredCountry?.length || 0;
  const totalPages = Math.ceil(totalItems / PERPAGE);
  const paginatedData = Array.isArray(filteredCountry)
    ? filteredCountry.slice((page - 1) * PERPAGE, page * PERPAGE)
    : null;

  if (!paginatedData || page > totalPages) {
    return (
      <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
        <Image src="/nodata.svg" alt="No Data" width="210" height="240" className="object-cover" />
        <p className="text-xl font-bold text-muted-foreground">No Country found!</p>
        <PaginationBar currentPage={page} totalPages={totalPages} queryParams={queryParams} />
      </div>
    );
  }

  return (
    <div className="size-full">
      <div className="grid grid-cols-4 gap-8">
        {paginatedData?.map((data) => {
          return (
            <CountryCard key={data.cca3} code={data.cca3} name={data.name.official} image={data.flags.svg} region={data.region} capital={data.capital} population={data.population} imageAlt={data.flags.alt} />
          )
        })}
      </div>

      <PaginationBar currentPage={page} totalPages={totalPages} queryParams={queryParams} />
    </div>
  )
}
