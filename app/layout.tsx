import { ClerkProvider } from '@clerk/nextjs'
import { headers } from 'next/headers'

import type { Metadata } from 'next'
import './globals.css'

// ✅ Metadata stays up here
export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

// ✅ Final clean RootLayout with ClerkProvider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const clerkHeaders = headers();

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      headers={clerkHeaders}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
