import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Floatwsp from "@/components/navigation/Floatwsp"
import Navbar from "@/components/navigation/navbar"

export const metadata: Metadata = {
  title: 'Landing iphone',
  description: 'Creado por ulises vetere',
  generator: 'ulisesvetere',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>

      </head>
      <Navbar />
      <body>{children}</body>
      <Floatwsp/>
    </html>
  )
}
