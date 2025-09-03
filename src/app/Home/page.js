"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
  const [medicamentos, setMedicamentos] = useState([]);

  // Cargar la base de datos JSON
  useEffect(() => {
    fetch("/farmacoteca_por_categoria.json")
      .then((res) => res.json())
      .then((data) => {
        const lista = Object.entries(data).flatMap(([categoria, meds]) =>
          Object.keys(meds)
        );
        setMedicamentos(lista);
      })
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  // Filtrar resultados
  const resultados = medicamentos.filter((med) =>
    med.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://agendapro.com/blog/wp-content/uploads/sites/2/2024/06/Alta20medica20ejemplo.webp')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-white/80">
        {/* BUSCADOR */}
        <section className="flex flex-col items-center pt-8 gap-4">
          <input
            type="text"
            placeholder="Buscar medicamentos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-3/4 md:w-1/2 px-4 py-3 rounded-full shadow-md focus:outline-none border border-gray-300 bg-white placeholder-[#192a67] text-black"
          />

          {/* Resultados */}
          {query && (
            <div className="w-3/4 md:w-1/2 bg-white shadow-lg rounded-xl p-4">
              {resultados.length > 0 ? (
                <ul className="space-y-2">
                  {resultados.map((med, i) => (
                    <li key={i}>
                      <Link
                        href={`/Catalogo/${encodeURIComponent(med)}`}
                        className="block p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                      >
                        {med}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">
                  No se encontraron resultados para "{query}"
                </p>
              )}
            </div>
          )}
        </section>

        {/* CATEGORÍAS */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#192a67]">
            Explora nuestras categorías
          </h3>
          <div className="grid gap-10 md:grid-cols-2">
            <a
              href="/Catalogo"
              className="bg-[#192a67] text-white rounded-2xl p-10 flex flex-col items-center justify-center font-bold text-xl shadow-lg hover:bg-blue-900 transition"
            >
              Sedoanalgésicos
            </a>
            <a
              href="/Catalogo"
              className="bg-[#192a67] text-white rounded-2xl p-10 flex flex-col items-center justify-center font-bold text-xl shadow-lg hover:bg-blue-900 transition"
            >
              Líquidos y Electrolitos
            </a>
          </div>
        </section>

        {/* MODO ENSEÑANZA */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-[#192a67]">
                  Modo Enseñanza
                </h4>
                <p className="text-gray-600 text-sm">
                  Activa este modo para acceder a explicaciones más detalladas y
                  contenido educativo.
                </p>
              </div>
              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-300 rounded-full peer-focus:outline-none peer-checked:bg-[#192a67] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
