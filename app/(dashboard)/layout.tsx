import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen dark:bg-darkBackground">
      <div className="size-full flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
