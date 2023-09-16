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
      <head>
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-512x512.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-48x48.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://js.mohammedk.me" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta name="twitter:image" content="https://js.mohammedk.me/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://js.mohammedk.me" />
        <meta property="og:image" content="https://js.mohammedk.me/icons/icon-48x48.png" />
      </head>
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

