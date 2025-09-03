"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <body className="bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-[#192a67] text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMTI1IDNxMi41IDAgNC4xODggMS44NVQyMiA5LjI1cTAgLjQ1LS4wNS44ODh0LS4xNzUuODYyaC02LjI1bC0xLjctMi41NXEtLjEyNS0uMi0uMzUtLjMyNVQxMyA4cS0uMzI1IDAtLjU4Ny4ydC0uMzYzLjVsLTEuMzUgNC4wNWwtLjg3NS0xLjNxLS4xMjUtLjItLjM1LS4zMjVUOSAxMUgyLjIyNXEtLjEyNS0uNDI1LS4xNzUtLjg2MlQyIDkuMjc1UTIgNi43IDMuNjc1IDQuODVUNy44NSAzcTEuMiAwIDIuMjYzLjQ3NVQxMiA0LjhxLjgtLjg1IDEuODYzLTEuMzI1VDE2LjEyNSAzTTEyIDIxcS0uNDUgMC0uODYyLS4xNjJ0LS43MzgtLjQ4OGwtNi43LTYuNzI1cS0uMTUtLjE1LS4yNzUtLjNUMy4xNzUgMTNIOC40NWwxLjcgMi41NXEuMTI1LjIuMzUuMzI1dC40NzUuMTI1cS4zMjUgMCAuNi0uMnQuMzc1LS41bDEuMzUtNC4wNWwuODUgMS4zcS4xNS4yLjM3NS4zMjVUMTUgMTNoNS44bC0uMjUuM2wtLjI1LjNsLTYuNzI1IDYuNzVxLS4zMjUuMzI1LS43MjUuNDg4VDEyIDIxIi8+PC9zdmc+"
              alt="Logo FIDCUS"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-bold">FIDCUS</h1>
          </div>

          {/* Notificaciones, Home y Perfil */}
          <div className="flex items-center gap-6">
            {/* Campana */}
            <button
            onClick={() => router.push("/Notifications")}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEgMTl2MUgzdi0xbDItMnYtNmMwLTMuMSAyLjAzLTUuODMgNS02LjcxVjRhMiAyIDAgMCAxIDItMmEyIDIgMCAwIDEgMiAydi4yOWMyLjk3Ljg4IDUgMy42MSA1IDYuNzF2NnptLTcgMmEyIDIgMCAwIDEtMiAyYTIgMiAwIDAgMS0yLTIiLz48L3N2Zz4="
                alt="Notificaciones"
                className="w-6 h-6"
              />
            </button>

            {/* Icono Home */}
            <Link href="/Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:opacity-80 transition"
              >
                <path
                  fill="#fff"
                  d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
                />
              </svg>
            </Link>

            {/* Perfil */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMHMxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMk03LjM1IDE4LjVDOC42NiAxNy41NiAxMC4yNiAxNyAxMiAxN3MzLjM0LjU2IDQuNjUgMS41Yy0xLjMxLjk0LTIuOTEgMS41LTQuNjUgMS41cy0zLjM0LS41Ni00LjY1LTEuNW0xMC43OS0xLjM4YTkuOTUgOS45NSAwIDAgMC0xMi4yOCAwQTcuOTYgNy45NiAwIDAgMSA0IDEyYzAtNC40MiAzLjU4LTggOC04czggMy41OCA4IDhjMCAxLjk1LS43IDMuNzMtMS44NiA1LjEyIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDZjLTEuOTMgMC0zLjUgMS41Ny0zLjUgMy41UzEwLjA3IDEzIDEyIDEzczMuNS0xLjU3IDMuNS0zLjVTMTMuOTMgNiAxMiA2bTAgNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzExLjE3IDggMTIgOHMxLjUuNjcgMS41IDEuNVMxMi44MyAxMSAxMiAxMSIvPjwvc3ZnPg=="
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
  );
}

