import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

import './global.css' // Ensure global styles are imported
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SplitBuddy - Split Payments with buddies",
  description: "Split expenses with roommates, friends, and family effortlessly.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
