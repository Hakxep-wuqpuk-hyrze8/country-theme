import Spinner from "@/components/spinner";

export default function loading() {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center">
      <Spinner />
    </div>
  )
}
