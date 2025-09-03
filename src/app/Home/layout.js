// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {/* HEADER */}
        <header className="bg-[#192a67] text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <h1 className="text-2xl font-bold">Farmacoteca</h1>
            <nav className="space-x-6 hidden md:flex">
              <a href="/" className="hover:underline">Inicio</a>
              <a href="/catalogo" className="hover:underline">Catálogo</a>
              <a href="/contacto" className="hover:underline">Contacto</a>
            </nav>
            {/* Menú hamburguesa en móvil */}
            <button className="md:hidden text-white focus:outline-none">
              ☰
            </button>
          </div>
        </header>

        {/* MAIN */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#192a67] text-white mt-10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
            © 2025 Farmacoteca. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}
