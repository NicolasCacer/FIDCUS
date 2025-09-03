export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#192a67] text-white min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#192a67] border-r border-white/20 p-4 hidden md:block">
          <h1 className="text-2xl font-bold mb-6">Farmacoteca</h1>
          <nav className="space-y-4">
            <a href="/" className="block hover:text-gray-300">
              General
            </a>
            <a href="/segmentos" className="block hover:text-gray-300">
              Segmentos
            </a>
            <a href="/medicamentos" className="block hover:text-gray-300">
              Medicamentos
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white text-[#192a67] rounded-tl-2xl shadow-lg p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
