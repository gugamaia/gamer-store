import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google';

const font = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "G4m3r.5t0r3",
  description: "Newest version for your favorite store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
