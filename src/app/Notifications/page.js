"use client";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-gray-100 relative"
      style={{
        backgroundImage:
          "url('https://agendapro.com/blog/wp-content/uploads/sites/2/2024/06/Alta20medica20ejemplo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa semitransparente para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Barra superior */}
        <header className="bg-[#192a67] text-white p-4 shadow-md flex items-center gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M16.125 3q2.5 0 4.188 1.85T22 9.25q0 .45-.05.888t-.175.862h-6.25l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.587.2t-.363.5l-1.35 4.05l-.875-1.3q-.125-.2-.35-.325T9 11H2.225q-.125-.425-.175-.862T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.15-.15-.275-.3T3.175 13H8.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h5.8l-.25.3l-.25.3l-6.725 6.75q-.325.325-.725.488T12 21"
              />
            </svg>
            <span className="text-xl font-bold">FIDCUS</span>
          </div>
        </header>

        {/* Caja de contenido */}
        <main className="max-w-3xl mx-auto bg-white mt-10 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#192a67]">
            Listado de Desabastecimiento de Medicamentos
          </h2>
          <p className="text-gray-700 mb-6">
            Aquí puedes consultar el listado oficial publicado por el INVIMA
            sobre medicamentos en estado de desabastecimiento en Colombia.
          </p>

          <a
            href="https://www.invima.gov.co/sites/default/files/medicamentos-productos-biologicos/Desabastecimientos/2025/listado_abastecimiento_y_desabastecimiento_medicamentos_julio_de_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#192a67] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0f1b44] transition"
          >
            📄 Ver Listado Oficial (PDF)
          </a>
        </main>
      </div>
    </div>
  );
}
