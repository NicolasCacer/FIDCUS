export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {/* HEADER */}
        <header className="bg-[#192a67] text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            
            {/* Logo + Nombre */}
            <div className="flex items-center gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNi4xMjUgM3EyLjUgMCA0LjE4OCAxLjg1VDIyIDkuMjVxMCAuNDUtLjA1Ljg4OHQtLjE3NS44NjJoLTYuMjVsLTEuNy0yLjU1cS0uMTI1LS4yLS4zNS0uMzI1VDEzIDhxLS4zMjUgMC0uNTg3LjJ0LS4zNjMuNWwtMS4zNSA0LjA1bC0uODc1LTEuM3EtLjEyNS0uMi0uMzUtLjMyNVQ5IDExSDIuMjI1cS0uMTI1LS40MjUtLjE3NS0uODYyVDIgOS4yNzVRMiA2LjcgMy42NzUgNC44NVQ3Ljg1IDNxMS4yIDAgMi4yNjMuNDc1VDEyIDQuOHEuOC0uODUgMS44NjMtMS4zMjVUMTYuMTI1IDNNMTIgMjFxLS40NSAwLS44NjItLjE2MnQtLjczOC0uNDg4bC02LjctNi43MjVxLS4xNS0uMTUtLjI3NS0uM1QzLjE3NSAxM0g4LjQ1bDEuNyAyLjU1cS4xMjUuMi4zNS4zMjV0LjQ3NS4xMjVxLjMyNSAwIC42LS4ydC4zNzUtLjVsMS4zNS00LjA1bC44NSAxLjNxLjE1LjIuMzc1LjMyNVQxNSAxM2g1LjhsLS4yNS4zbC0uMjUuM2wtNi43MjUgNi43NXEtLjMyNS4zMjUtLjcyNS40ODhUMTIgMjEiLz48L3N2Zz4="
                alt="Logo FIDCUS"
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold">FIDCUS</h1>
            </div>

            {/* Notificaciones y Perfil */}
            <div className="flex items-center gap-6">
              {/* Campana */}
              <button className="relative">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGEyIDIgMCAwIDAgMiAybTYtNnYtNWMwLTMuMDctMS42NC01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xeiIvPjwvc3ZnPg=="
                  alt="Notificaciones"
                  className="w-6 h-6"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </button>

              {/* Perfil */}
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiA0YTQgNCAwIDAgMSA0IDRhNCA0IDAgMCAxLTQgNGE0IDQgMCAwIDEtNC00YTQgNCAwIDAgMSA0LTRtMCAxMGM0LjQyIDAgOCAxLjc5IDggNHYySDR2LTJjMC0yLjIxIDMuNTgtNCA4LTQiLz48L3N2Zz4="
                  alt="Perfil"
                  className="w-8 h-8"
                />
                <span>Perfil</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#192a67] text-white mt-10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
            © 2025 FIDCUS. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}

