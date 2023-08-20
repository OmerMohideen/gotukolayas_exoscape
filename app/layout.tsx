import './globals.css'
import { Work_Sans } from 'next/font/google'

export const metadata = {
  title: 'EXOScape',
  description: 'An Interplanetary travel app built by team gotukolayas',
}

const work_sans = Work_Sans({
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<html lang="en" className={work_sans.className}>
      <body>{children}</body>
    </html>
  )
}
