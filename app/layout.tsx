import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Madhav Gupta | Editorial Portfolio",
  description: "Personal portfolio of Madhav Gupta, a second-year bachelor's student at CGC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} bg-[#f4f0ea] text-[#111111] antialiased selection:bg-[#111111] selection:text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
