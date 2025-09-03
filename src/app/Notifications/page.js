"use client";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto bg-white/90 mt-12 p-8 rounded-xl shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-[#192a67]">
        Listado de Desabastecimiento de Medicamentos
      </h2>
      <p className="text-gray-700 mb-6">
        Aquí puedes consultar el listado oficial publicado por el INVIMA sobre
        medicamentos en estado de desabastecimiento en Colombia.
      </p>

      <a
        href="https://www.invima.gov.co/sites/default/files/medicamentos-productos-biologicos/Desabastecimientos/2025/listado_abastecimiento_y_desabastecimiento_medicamentos_julio_de_2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#192a67] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0f1b44] transition"
      >
        📄 Ver Listado Oficial (PDF)
      </a>
    </div>
  );
}
