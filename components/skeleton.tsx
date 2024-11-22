import { TOTAL_CARD_PER_PAGE } from "@/lib/constants"
import { Skeleton } from "./ui/skeleton"


export function CardSkeleton() {
  return <Skeleton className="w-[330px] h-[400px]" />
}

export function CardTableSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-8 pb-8">
      {Array.from({ length: TOTAL_CARD_PER_PAGE }).map((_, i) => {
        return (
          <CardSkeleton key={i} />
        )
      })}
    </div>
  )
}

export function CountryDetailSkeleton() {
  return (
    <div className="size-full flex justify-between">
      <Skeleton className="w-5/12 h-[400px] rounded-lg" />
      <div className="w-6/12 flex flex-col gap-y-8">
        <Skeleton className="h-[48px] w-[120px]" />
        <Skeleton className="h-[180px] w-4/5" />
        <Skeleton className="h-[80px] w-4/5" />
      </div>
    </div>
  )
}

export function RegionSelectorSkeleton() {
  return <Skeleton className="w-[240px] h-[60px]" />
};