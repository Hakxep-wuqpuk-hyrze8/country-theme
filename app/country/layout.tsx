"use client";

import Header from '@/components/header';
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
    <div className="min-h-screen dark:bg-darkBackground">
      <div className="size-full flex flex-col">
        <Header />
        <div className="w-full p-7">
          <Button
            onClick={() => router.back()}
            type="button"
            variant="outline"
            size="lg"
            className="text-darkText font-semibold text-lg shadow-md dark:bg-darkBlue dark:text-white dark:hover:bg-darkBackground"
          >
            <FaArrowLeft className="size-4" />
            Back
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

