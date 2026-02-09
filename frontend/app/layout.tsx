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
            <div className="text-gray-400">Dashboard</div>
            <div className="text-gray-500">Links</div>
            <div className="text-gray-500">Alertas</div>
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
