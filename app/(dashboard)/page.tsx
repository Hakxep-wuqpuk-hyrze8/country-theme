import CountryCard from "@/feature/country/components/country-card";
import SearchCountryInput from '@/feature/country/components/search-country-input';
import RegionSelector from "@/feature/country/components/region-selector";

import cdata from "@/data/data.json";

export default async function Home() {
  const dataList = cdata.map((c) => ({
    name: c.name,
    population: c.population,
    region: c.region,
    capital: c.capital ?? "empty",
    flag: c.flag,
  }));

  return (
    <main className="bg-lightBackground flex flex-col p-7">
      <div className="flex justify-between mb-4">
        <SearchCountryInput />
        <RegionSelector />
      </div>
      <div className="grid grid-cols-4 gap-8">
        {dataList.map((data, index) => {
          return (
            <CountryCard key={index} {...data} />
          )
        })}
      </div>
    </main>
  );
}
