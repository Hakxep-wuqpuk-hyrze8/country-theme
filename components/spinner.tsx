import { FaSpinner } from "react-icons/fa";
export default function Spinner() {
  return (
    <div className="my-auto mx-auto flex gap-3 items-center justify-center">
      <FaSpinner className="text-2xl text-muted-foreground animate-spin duration-700" />
      <p className="text-lg font-bold text-muted-foreground"> Loading... </p>
    </div>
  )
}
