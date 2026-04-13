import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igreja Apostólica Luz da Fé (IALF)",
  description: "Um lugar onde a Glória de Deus se manifesta em cada detalhe. Sob a liderança do Pastor Bruno Boavista Castelo Branco.",
  icons: {
    icon: '/img/logo_1.png',
    shortcut: '/img/logo_1.png',
    apple: '/img/logo_1.png',
  },
  openGraph: {
    title: "Igreja Apostólica Luz da Fé",
    description: "Um lugar onde a Glória de Deus se manifesta em cada detalhe. Sob a liderança do Pastor Bruno Boavista Castelo Branco.",
    url: "https://igrejaa-ap-lf.vercel.app",
    siteName: "Igreja Apostólica Luz da Fé",
    images: [
      {
        url: "/img/logo_1.png",
        width: 800,
        height: 600,
        alt: "Logo Igreja Luz da Fé",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-slate-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
