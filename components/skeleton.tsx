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
