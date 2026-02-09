import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrbitOps",
  description: "Monitoramento operacional de links Starlink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0B0F14] text-gray-100 flex`}
      >
        {/* Sidebar */}
        <aside className="w-64 bg-[#0F141B] border-r border-gray-800 p-4">
          <h1 className="text-xl font-semibold text-blue-500 mb-8">
            OrbitOps
          </h1>

          <nav className="space-y-3 text-sm">
          <Link href="/" className="block text-gray-400 hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/links" className="block text-gray-500 hover:text-blue-400">
            Links
          </Link>
          <Link href="/alertas" className="block text-gray-500 hover:text-blue-400">
            Alertas
          </Link>
          <div className="text-gray-500">Configurações</div>
        </nav>

        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 p-8 bg-[#0B0F14]">
          {children}
        </main>
      </body>
    </html>
  );
}
