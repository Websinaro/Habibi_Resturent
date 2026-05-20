import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ardente — Fine Dining',
  description: 'An intimate fine dining experience in the heart of the city. Seasonal menus, handcrafted cocktails, unforgettable evenings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
