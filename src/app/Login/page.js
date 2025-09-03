"use client";

export default function Notifications() {
  const abrirPDF = () => {
    window.open(
      "https://www.invima.gov.co/sites/default/files/medicamentos-productos-biologicos/Desabastecimientos/2025/listado_abastecimiento_y_desabastecimiento_medicamentos_julio_de_2025.pdf",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Alertas de Desabastecimiento de Medicamentos
      </h2>
      <button
        onClick={abrirPDF}
        className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
      >
        Ver listado INVIMA
      </button>
    </div>
  );
}
