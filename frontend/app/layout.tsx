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
        <div className="absolute top-0 w-full p-4 md:p-6 z-50 pointer-events-none flex justify-between items-start max-w-7xl mx-auto left-0 right-0">
          <a href="/" className="pointer-events-auto text-3xl md:text-4xl font-black uppercase tracking-tighter hover:scale-[1.02] transition-transform">
            <span className="text-black drop-shadow-[3px_3px_0px_#ff4911]">MY TOXIC AI</span>
          </a>
          <a 
            href="/about" 
            className="pointer-events-auto brutal-btn bg-black text-white px-6 py-2 font-black text-lg uppercase tracking-wider hover:bg-[#fff200] hover:text-black transition-colors"
          >
            About
          </a>
        </div>
        <div className="flex-1 flex flex-col pt-20 md:pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
