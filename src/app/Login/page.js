"use client";

import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#192a67] to-white">
      {/* Logo + Nombre */}
      <div className="flex flex-col items-center mb-8">
        <div
          className="w-20 h-20 mb-4"
          dangerouslySetInnerHTML={{
            __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 448 512"><path fill="#e6e8ef" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1q-9-.9-18.3-.9h-91.4q-9.3 0-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48"/></svg>
            `,
          }}
        />
        <h1 className="text-white text-4xl font-bold tracking-wide">FIDCUS</h1>
      </div>

      {/* Cuadro de login */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#192a67] mb-6">
          Inicia Sesión
        </h2>

        {/* Usuario */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 flex items-center gap-2">
            <span
              dangerouslySetInnerHTML={{
                __html: `
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#192a67" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                `,
              }}
            />
            Usuario
          </label>
          <input
            type="text"
            placeholder="Ingresa tu usuario"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a67]"
          />
        </div>

        {/* Contraseña */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 flex items-center gap-2">
            <span
              dangerouslySetInnerHTML={{
                __html: `
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#192a67" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/></svg>
                `,
              }}
            />
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a67]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-[#192a67] font-medium"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        {/* Botón degradado */}
        <button className="w-full bg-gradient-to-r from-[#192a67] to-[#243B74] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
          Entrar
        </button>

        {/* Recuperar contraseña */}
        <p className="text-center mt-4">
          <a href="#" className="text-[#192a67] hover:underline">
            ¿Has olvidado tu contraseña?
          </a>
        </p>
      </div>
    </div>
  );
}
