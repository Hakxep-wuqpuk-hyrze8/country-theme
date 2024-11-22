import { CardTableSkeleton, RegionSelectorSkeleton } from "@/components/skeleton";
import CountryTable from "@/feature/country/components/country-table";
import RegionSelector from "@/feature/country/components/region-selector";
import SearchCountryInput from '@/feature/country/components/search-country-input';
import { Suspense } from "react";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    region?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const currentRegion = searchParams?.region ?? "";
  const currentName = searchParams?.name ?? "";

  return (
    <main className="min-h-screen bg-lightBackground dark:bg-darkBackground flex flex-col p-7">
      <div className="flex justify-between mb-7">
        <SearchCountryInput />
        <Suspense fallback={<RegionSelectorSkeleton />}>
          <RegionSelector currentRegion={currentRegion} />
        </Suspense>
      </div>
      <Suspense fallback={<CardTableSkeleton />} >
        <CountryTable name={currentName} region={currentRegion} page={currentPage} />
      </Suspense>
    </main>
  );
}
