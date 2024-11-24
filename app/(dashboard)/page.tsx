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
    <main className="min-h-screen bg-backgrounds-light dark:bg-backgrounds-dark flex flex-col p-7">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between mb-7">
        <SearchCountryInput />
        <Suspense key={currentName + currentPage} fallback={<RegionSelectorSkeleton />}>
          <RegionSelector currentRegion={currentRegion} />
        </Suspense>
      </div>
      <Suspense key={currentName + currentPage} fallback={<CardTableSkeleton />} >
        <CountryTable name={currentName} region={currentRegion} page={currentPage} />
      </Suspense>
    </main>
  );
}
