import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const rubik = localFont({
  src: [
    {
      path: '../../public/fonts/Rubik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rubik-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rubik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Денталика",
  description: "Денталика - стоматологическая клиника",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
