import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateusz Zaniewski - Fullstack",
  description: "Cześć, nazywam się Mateusz Zaniewski i to jest moja strona portfolio. Zobacz jakie projekty stworzyłem, oraz w jakich technologiach pracuję. Jeżeli spodobały Ci się moje prace. Pobierz moje CV i odezwij się.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
      <meta charSet="UTF-8" />
     

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
