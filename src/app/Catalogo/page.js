"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Catalogo() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/farmacoteca_por_categoria.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  if (!data) {
    return (
      <p className="text-center mt-10 text-[#192a67] font-semibold">
        Cargando medicamentos...
      </p>
    );
  }

  // Aplanar las categorías → lista de medicamentos con su categoría
  const medicamentos = Object.entries(data).flatMap(([categoria, meds]) =>
    Object.entries(meds).map(([nombre]) => ({
      nombre,
      categoria,
    }))
  );

  // Ordenar por nombre
  medicamentos.sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Filtrar según búsqueda
  const resultados = medicamentos.filter((med) =>
    med.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-[#192a67] mb-6">
        Catálogo de Medicamentos
      </h2>

      {/* 🔍 Barra de búsqueda */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Buscar medicamentos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-3/4 md:w-1/2 px-4 py-3 rounded-full shadow-md focus:outline-none border border-gray-300 bg-white placeholder-[#192a67] text-black"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resultados.length > 0 ? (
          resultados.map((med) => (
            <Link
              key={med.nombre}
              href={`/Catalogo/${encodeURIComponent(med.nombre)}`}
              className="bg-[#192a67] text-white rounded-xl shadow-md p-6 flex items-center justify-center font-bold text-lg hover:bg-blue-900 transition"
            >
              {med.nombre}
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No se encontraron resultados para "{query}"
          </p>
        )}
      </div>
    </div>
  );
}
