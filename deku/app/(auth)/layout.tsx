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
                    <div className="flex justify-center lg:justify-start items-center">
                        <p className="flex absolute text-white z-50 text-4xl lg:text-7xl top-24 lg:top-[30%] lg:left-48 font-extrabold">
                            Welcome to
                        </p>
                        <p className="flex absolute text-white z-50 text-3xl lg:text-7xl top-[17%] lg:top-[40%] lg:left-48 font-extrabold">
                            Deku Travel & Tours!
                        </p>
                        <p className="flex absolute text-white z-50 text-sm lg:text-lg top-44 lg:top-[50%] lg:left-[200px] font-bold">
                            Let's convert your dreams into reality
                        </p>
                    </div>
                    <video loop autoPlay muted className="absolute h-screen w-full object-cover brightness-50">
                        <source src="/videoBG.mp4" />
                    </video>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}