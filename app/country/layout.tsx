"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";

export default function CountryDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className="size-full flex flex-col">
      <div className="w-full p-7">
        <Button
          onClick={() => router.back()}
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

