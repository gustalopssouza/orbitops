export default function Home() {
  return (
    <>
      <header className="mb-8">
        <h2 className="text-2xl font-medium text-blue-400">Visão Geral</h2>
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
    </>
  );
}
