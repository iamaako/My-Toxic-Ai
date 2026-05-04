import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MY TOXIC AI",
  description: "A satirical stress-relief virtual partner chat application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#fefce8] text-black selection:bg-[#ff4911] selection:text-white">
        <nav className="w-full bg-black text-white brutal-border-b p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl md:text-3xl font-black uppercase tracking-tight hover:text-[#fff200] transition-colors">
              MY TOXIC AI
            </a>
            <a 
              href="/about" 
              className="brutal-btn bg-[#ff4911] text-white px-6 py-2 font-black text-lg uppercase tracking-wider hover:bg-[#fff200] hover:text-black transition-colors"
            >
              About
            </a>
          </div>
        </nav>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
