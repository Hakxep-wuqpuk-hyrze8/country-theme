import { CardTableSkeleton } from "@/components/skeleton";
import CountryTable from "@/feature/country/components/country-table";
import RegionSelector from "@/feature/country/components/region-selector";
import SearchCountryInput from '@/feature/country/components/search-country-input';
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <main className="min-h-screen bg-lightBackground dark:bg-darkBackground flex flex-col p-7">
      <div className="flex justify-between mb-7">
        <SearchCountryInput />
        <RegionSelector />
      </div>
      <Suspense fallback={<CardTableSkeleton />} >
        <CountryTable />
      </Suspense>
    </main>
  );
}
