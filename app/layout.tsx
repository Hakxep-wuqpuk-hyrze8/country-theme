import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/header";
import { QueryProviders } from "@/components/query-provider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"]
});

export const metadata: Metadata = {
  title: "REST Countries API Explorer",
  description: "提供來自 API 的全球國家資料，支援搜尋、篩選和詳細查看。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body
        className={`${nunitoSans.className} antialiased`}
      >
        <QueryProviders>
          <div className="min-h-screen h-screen">
            <div className="size-full flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </QueryProviders>
      </body>
    </html>
  );
}
