import CountryTable from "@/feature/country/components/country-table";
import RegionSelector from "@/feature/country/components/region-selector";
import SearchCountryInput from '@/feature/country/components/search-country-input';

export default async function Page() {
  // change page params to page query
  // use-debounce package 

  return (
    <main className="min-h-screen bg-lightBackground dark:bg-darkBackground flex flex-col p-7">
      <div className="flex justify-between mb-7">
        <SearchCountryInput />
        <RegionSelector />
      </div>
      <CountryTable />
    </main>
  );
}
