import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto dark:bg-backgrounds-dark">
      <div className="size-full flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
