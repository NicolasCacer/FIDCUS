export default function Home() {
  return (
    <div>
      {/* BUSCADOR */}
      <section className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Buscar medicamentos..."
          className="w-3/4 md:w-1/2 px-4 py-3 rounded-full shadow-md focus:outline-none text-black"
        />
      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-10 text-[#192a67]">
          Explora nuestras categorías
        </h3>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Sedoanalgésicos */}
          <a
            href="/catalogo/sedoanalgesicos"
            className="bg-white text-[#192a67] rounded-2xl p-10 flex flex-col items-center justify-center font-bold text-xl shadow-lg hover:shadow-xl border transition"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOS4zMSA0LjY5MWE1LjUgNS41IDAgMCAwLTcuNzggMGwtNi44NCA2Ljg0YTUuNSA1LjUgMCAwIDAgMy44OSA5LjM5YTUuNTIgNS41MiAwIDAgMCAzLjg5LTEuNjFsNi44NC02Ljg0YTUuNSA1LjUgMCAwIDAgMC03Ljc4bS0uNzEgNy4wN2wtMy40MiAzLjQybC02LjM2LTYuMzZMMTIuMjQgNS40YTQuNSA0LjUgMCAwIDEgNy42OCAzLjE3YTQuNDMgNC40MyAwIDAgMS0xLjMyIDMuMTkxIi8+PC9zdmc+"
              alt="Sedoanalgésicos"
              className="w-12 h-12 mb-4"
            />
            Sedoanalgésicos
          </a>

          {/* Líquidos y Electrolitos */}
          <a
            href="/catalogo/liquidos-electrolitos"
            className="bg-white text-[#192a67] rounded-2xl p-10 flex flex-col items-center justify-center font-bold text-xl shadow-lg hover:shadow-xl border transition"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik03IDIycS0uODI1IDAtMS40MTItLjU4N1Q1IDIwdi0ycTAtLjgyNS41ODgtMS40MTJUNyAxNnYtNXEtLjgyNSAwLTEuNDEyLS41ODdUNSA5VjdxMC0uODI1LjU4OC0xLjQxMlQ3IDVoM1Y0SDlWMmg2djJoLTF2MWgzcS44MjUgMCAxLjQxMy41ODhUMTkgN3YycTAgLjgyNS0uNTg3IDEuNDEzVDE3IDExdjVxLjgyNSAwIDEuNDEzLjU4OFQxOSAxOHYycTAgLjgyNS0uNTg3IDEuNDEzVDE3IDIyeiIvPjwvc3ZnPg=="
              alt="Líquidos y Electrolitos"
              className="w-12 h-12 mb-4"
            />
            Líquidos y Electrolitos
          </a>
        </div>
      </section>

      {/* MODO ENSEÑANZA */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
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
  );
}
