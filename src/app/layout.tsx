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
    icon: '/img/favicon_logo.ico',
    shortcut: '/img/favicon_logo.ico',
    apple: '/img/favicon_logo.ico',
  },
  openGraph: {
    title: "Igreja Apostólica Luz da Fé",
    description: "Um lugar onde a Glória de Deus se manifesta em cada detalhe. Sob a liderança do Pastor Bruno Boavista Castelo Branco.",
    url: "https://igrejaa-ap-lf.vercel.app",
    siteName: "Igreja Apostólica Luz da Fé",
    images: [
      {
        url: "https://igrejaa-ap-lf.vercel.app/img/logobg.png",
        width: 800,
        height: 800,
        alt: "Logo Igreja Apostólica Luz da Fé",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igreja Apostólica Luz da Fé",
    description: "Um lugar onde a Glória de Deus se manifesta em cada detalhe. Sob a liderança do Pastor Bruno Boavista Castelo Branco.",
    images: ["https://igrejaa-ap-lf.vercel.app/img/logobg.png"],
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
