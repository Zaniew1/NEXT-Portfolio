import "./globals.css";
import type { Metadata } from "next";
import { Lexend, Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LangProviders } from "@/components/atoms/LangProviders/LangProviders";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],     // choose weights
  variable: "--font-roboto",  // optional CSS variable
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-lexend-sans",
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
     <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      </head>
      <body
        className={`${roboto.variable} ${lexend.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <SpeedInsights/>
      </body>
    </html>
  );
}
