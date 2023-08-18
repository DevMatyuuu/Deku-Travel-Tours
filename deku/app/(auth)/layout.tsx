import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import '../globals.css'


export const metadata = {
    title: 'Deku Travel & Tours',
    description: 'A Next.js 13 Meta Travel & Tours application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children} : {children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <video loop autoPlay className="absolute h-screen object-cover">
                        <source src="/videoBG.mp4" />
                    </video>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}