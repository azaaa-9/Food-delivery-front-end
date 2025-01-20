import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import './globals.css'
  import { Header } from './_components/header'
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <div className="bg-muted h-screen flex gap-6  ">
//             <Header />
//             {children}
//         </div>
            </SignedIn>
            {children}
          </body>
        </html>
      </ClerkProvider>
    )
  }
   
 