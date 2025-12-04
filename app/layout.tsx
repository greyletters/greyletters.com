import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#050505",
};

export const metadata: Metadata = {
    title: "Greyletters",
    description: "Anonymous thoughts from the edge.",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Greyletters",
    },
    formatDetection: {
        telephone: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans antialiased selection:bg-neon-primary selection:text-white safe-area-inset">
                <Starfield />
                <Navbar />
                <main className="min-h-screen pt-16 md:pt-20 relative z-10 px-4 md:px-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
