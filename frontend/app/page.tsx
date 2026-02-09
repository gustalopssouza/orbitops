async function getBackendStatus() {
  const res = await fetch("http://localhost:4000/api/status", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const status = await getBackendStatus();

  return (
    <>
      <header className="mb-8">
        <h2 className="text-2xl font-medium text-blue-400">
          Visão Geral
        </h2>
        <p className="text-gray-500 text-sm">
          Monitoramento operacional de links Starlink
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Backend: {status.backend} • {status.timestamp}
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
