"use client";
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from "react-icons/fa";

export default function CountryDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full flex flex-col">
      <div className="w-full p-7">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="text-darkText font-semibold text-lg shadow-md"
        >
          <FaArrowLeft className="size-4" />
          Back
        </Button>
      </div>
      {children}
    </div>
  );
}

