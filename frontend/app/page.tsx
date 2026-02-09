export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-gray-100 flex">
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

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-medium">Visão Geral</h2>
          <p className="text-gray-400 text-sm">
            Monitoramento operacional de links Starlink
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F141B] border border-gray-800 rounded-lg p-6">
            <p className="text-sm text-gray-400">Links OK</p>
            <p className="text-3xl font-semibold text-green-500">0</p>
          </div>

          <div className="bg-[#0F141B] border border-gray-800 rounded-lg p-6">
            <p className="text-sm text-gray-400">Atenção</p>
            <p className="text-3xl font-semibold text-yellow-500">0</p>
          </div>

          <div className="bg-[#0F141B] border border-gray-800 rounded-lg p-6">
            <p className="text-sm text-gray-400">Críticos</p>
            <p className="text-3xl font-semibold text-red-500">0</p>
          </div>
        </section>
      </main>
    </div>
  );
}
