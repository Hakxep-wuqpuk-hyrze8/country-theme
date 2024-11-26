import GhostButton from "@/components/ghost-button";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { IoMdLogIn } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto dark:bg-backgrounds-dark">
      <div className="size-full flex flex-col">
        <Header>
          <SignedOut>

            <SignInButton>
              <GhostButton
                text="Sign in"
                Icon={<IoMdLogIn className="size-4 text-muted-foreground dark:text-texts-light" />}
              />
            </SignInButton>

            <SignUpButton>
              <Button
                variant="outline"
                className="bg-backgrounds-dark/80 hover:bg-backgrounds-light drop-shadow-lg text-texts-light dark:hover:text-texts-light dark:hover:border-texts-light hover:text-texts-dark/80"
              >
                <p className="font-semibold">
                  Sign up
                </p>
                <FaAngleRight
                  className="text-texts-light hover:text-texts-dark/80 dark:text-texts-light"
                />
              </Button>
            </SignUpButton>

          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Header>
        {children}
      </div>
    </div>
  );
}
