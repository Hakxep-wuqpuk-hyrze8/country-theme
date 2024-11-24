import { Loader } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="h-[400px] flex items-center justify-center gap-x-4">
      <Loader className="size-8 text-muted-foreground animate-spin" />
      <span className="text-lg text-muted-foreground font-semibold"> Loading ... </span>
    </div>
  )
}
