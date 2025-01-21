import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { Header } from './_components/header'
import { Categories } from './_components/Categories'
  export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>

            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
              <div className="bg-muted h-screen flex gap-6  ">
             <Header />
             {children}
        </div>
            </SignedIn>

      </ClerkProvider>
    )
  }
   
 