import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Yathin's Portfolio",
  description: "Yathin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} panton-loaded antialiased`}
      >
        <div style={{ position: "relative", minHeight: "100%", overflowY: "auto", overflowX: "hidden" }}>
          <div style={{ position: "sticky", top: 0, zIndex: 5 }}>
            <NavBar />
          </div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
