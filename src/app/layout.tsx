import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmar Ali Memon | Full Stack Developer",
  description:
    "Portfolio of Ahmar Ali Memon — Full Stack Developer specializing in Next.js 15, React, TypeScript, and Tailwind CSS. Karachi, Pakistan.",
  keywords: [
    "Ahmar Memon",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ahmar Memon" }],
  openGraph: {
    title: "Ahmar Memon | Full Stack Developer",
    description:
      "Building modern web experiences with React, Next.js, and scalable full-stack architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmar Memon | Full Stack Developer",
    description: "Premium developer portfolio — modern web applications & UI/UX.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-[#050508] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
