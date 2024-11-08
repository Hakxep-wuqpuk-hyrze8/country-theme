import CountryTable from "@/feature/country/components/country-table";
import RegionSelector from "@/feature/country/components/region-selector";
import SearchCountryInput from '@/feature/country/components/search-country-input';

export default async function Home() {
  return (
    <main className="bg-lightBackground flex flex-col p-7">
      <div className="flex justify-between mb-7">
        <SearchCountryInput />
        <RegionSelector />
      </div>
      <CountryTable />
    </main>
  );
}
