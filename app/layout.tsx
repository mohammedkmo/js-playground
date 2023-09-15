import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ weight: '400', subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'JS Playground',
  description: 'Play with JavaScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>

      <body className={spaceMono.className}>

        <div className='w-full border-b sticky top-0 z-50 bg-black'>
          <div className='flex items-center justify-between container py-3'>
            <h1 className=''>JS Playground</h1>

            <div className='flex items-center space-x-4'>
              <a href='https://github.com/mohammedkmo' target='_blank' className='text-gray-400 hover:text-gray-100'>Github</a>
              <a href='https://twitter.com/imohammedkareem' target='_blank' className='text-gray-400 hover:text-gray-100'>Twitter</a>
            </div>
          </div>
        </div>

        {children}</body>
    </html>
  )
}

