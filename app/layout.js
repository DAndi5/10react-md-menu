import {Inter} from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const roboto = Inter({
    subsets: ["latin"],
    // weight: ["300", "400"],
    weight: ['400', '700'],
    display: "swap",
    variable: "--roboto",
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>DaNiLiN AnDrEy</title>
            <meta name="color-scheme" content="dark"/>
            <meta name="theme-color" content="#000"/>
            <meta name="og:title" content="3D site"/>
            <meta name="og:url" content="/"/>
            <meta
                name="og:description"
                content="A placeholder portfolio website for Danilin Andrey"
            />
            <meta
                name="description"
                content="A placeholder portfolio website for Danilin Andrey"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className={roboto.variable}>
        <Header/>
        <main className='container'>{children}</main>
        </body>
        </html>
    )
}
