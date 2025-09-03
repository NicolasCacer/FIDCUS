export default function NotLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>FIDCUS - Desabastecimiento de Medicamentos</title>
        <meta
          name="description"
          content="Consulta el listado oficial del INVIMA sobre el desabastecimiento de medicamentos en Colombia con FIDCUS."
        />
      </head>
      <body className="m-0 p-0">
        {/* Contenedor con fondo */}
        <div
          className="min-h-screen w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://agendapro.com/blog/wp-content/uploads/sites/2/2024/06/Alta20medica20ejemplo.webp')",
          }}
        >
          {/* Capa blanca semitransparente */}
          <div className="absolute inset-0 bg-white/70"></div>
          {/* 🔹 Ajusta el número (70 → 80 → 90) según la opacidad que quieras */}

          {/* Contenido encima de la capa */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
