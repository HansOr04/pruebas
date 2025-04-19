import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./shared/styles/globals.css";
import Navbar from "../app/components/shared/navigation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindNest",
  description: "Encuentra el espacio perfecto para tu práctica profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">
          {children}
        </main>
      </body>
    </html>
  );
}