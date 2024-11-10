import { Loader } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="size-6 text-muted-foreground animate-spin" />
      Loading ...
    </div>
  )
}
