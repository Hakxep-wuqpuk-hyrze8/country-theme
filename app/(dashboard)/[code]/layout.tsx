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
    <div>
      <div className="w-full p-7">
        <Button
          onClick={() => router.back()}
          type="button"
          variant="outline"
          size="lg"
          className="text-texts-dark font-semibold text-lg shadow-md dark:bg-blue-900 dark:text-texts-light dark:hover:bg-backgrounds-dark"
        >
          <FaArrowLeft className="size-4" />
          Back
        </Button>
      </div>
      {children}
    </div>
  );
}

