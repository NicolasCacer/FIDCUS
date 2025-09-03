// app/page.js
export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#192a67] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenido a la Farmacoteca
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Encuentra los medicamentos que necesitas con facilidad y seguridad.
          </p>
          <a
            href="/catalogo"
            className="bg-white text-[#192a67] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* CATÁLOGO DESTACADO */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-10 text-[#192a67]">
          Medicamentos Destacados
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { nombre: "Paracetamol", desc: "500mg - Analgésico" },
            { nombre: "Ibuprofeno", desc: "400mg - Antiinflamatorio" },
            { nombre: "Amoxicilina", desc: "500mg - Antibiótico" },
            { nombre: "Loratadina", desc: "10mg - Antialérgico" },
          ].map((med, i) => (
            <div
              key={i}
              className="border rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-[#192a67]">{med.nombre}</h4>
              <p className="text-gray-600 mt-2">{med.desc}</p>
              <button className="mt-4 bg-[#192a67] text-white px-4 py-2 rounded-full hover:bg-blue-900 transition">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
