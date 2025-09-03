"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function MedicamentoDetalle() {
  const { medicamento } = useParams(); 
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const nombreDecodificado = decodeURIComponent(medicamento);

    fetch("/farmacoteca_por_categoria.json")
      .then((res) => res.json())
      .then((json) => {
        // Buscar el medicamento en todas las categorías
        for (const [categoria, meds] of Object.entries(json)) {
          if (nombreDecodificado in meds) {
            setDetalles({ categoria, ...meds[nombreDecodificado] });
            break;
          }
        }
      })
      .catch((err) => console.error("Error cargando JSON:", err));
  }, [medicamento]);

  if (!detalles) {
    return (
      <p className="text-center mt-10 text-[#192a67]">
        Cargando información de {decodeURIComponent(medicamento)}...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-[#192a67] mb-6">
          {decodeURIComponent(medicamento)}
        </h2>

        <p><span className="font-semibold">Categoría:</span> {detalles.categoria}</p>
        <p><span className="font-semibold">Presentación:</span> {detalles.presentacion}</p>
        <p><span className="font-semibold">Vía:</span> {detalles.via}</p>
        <p><span className="font-semibold">Seguridad:</span> {detalles.seguridad}</p>
        <p><span className="font-semibold">Tiempo:</span> {detalles.tiempo}</p>
        <p><span className="font-semibold">Concentración:</span> {detalles.concentracion}</p>
        <p><span className="font-semibold">Dilución:</span> {detalles.dilucion}</p>
        <p><span className="font-semibold">Unidad:</span> {detalles.unidad}</p>
        <p>
          <span className="font-semibold">Incompatibilidades:</span>{" "}
          {detalles.incompatibilidades?.join(", ") || "Ninguna"}
        </p>

        {detalles.observaciones?.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-[#192a67] mt-6 mb-2">
              Observaciones
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {detalles.observaciones.map((obs, i) => (
                <li key={i}>{obs}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-8">
          <Link
            href="/Catalogo"
            className="bg-[#192a67] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-900 transition"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
