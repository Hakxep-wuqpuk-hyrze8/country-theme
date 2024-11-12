import { Loader } from "lucide-react";

export default function CountryDetailLoading() {
  return (
    <div className="h-screen flex items-center justify-center gap-x-4">
      <Loader className="size-8 text-muted-foreground animate-spin" />
      <span className="text-lg text-muted-foreground font-semibold"> Loading ... </span>
    </div>
  )
}
