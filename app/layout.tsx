import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import { QueryProviders } from "@/components/query-provider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"]
});

export const metadata: Metadata = {
  title: {
    default: "Where in the world?",
    template: "%s - Where in the world"
  },
  description: "提供來自 Restcountry 的全球國家資料，支援搜尋、篩選和詳細查看",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
      >
        <body
          className={`${nunitoSans.className} antialiased`}
        >
          <QueryProviders>
            {children}
          </QueryProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
