"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Stethoscope, BookOpen, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-[#192a67] text-white font-sans">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16 lg:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
          Farmacoteca Digital
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mb-8 leading-relaxed">
          La herramienta que ayuda al personal de la salud a{" "}
          <span className="font-semibold">
            conocer, dosificar, aplicar y aprender
          </span>{" "}
          sobre medicamentos de manera confiable y centralizada.
        </p>
        <button
          onClick={() => router.push("/Login")}
          className="bg-white text-[#192a67] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Iniciar Sesión
        </button>

        {/* Carrusel */}
        <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=612x612&w=0&k=20&c=oKR-00at4oXr4tY5IxzqsswaLaaPsPRkdw2MJbYHWgA="
                alt="Apoyo médico"
                className="rounded-xl shadow-lg w-full h-[250px] sm:h-[350px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://media.istockphoto.com/id/1689003176/photo/medical-technology-doctor-holding-health-icon-with-dna-electronic-medical-record-digital.jpg?s=612x612&w=0&k=20&c=oA6bYR-b94SrfgDLcC0DIld0DUu8zEq6Md5_mWdJRHU="
                alt="Tecnología médica"
                className="rounded-xl shadow-lg w-full h-[250px] sm:h-[350px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://media.istockphoto.com/id/1355029954/photo/medical-technology-futuristic-concept.jpg?s=612x612&w=0&k=20&c=9gPSamaZ_vFSWN0OOf9gu6SuZj0hs62lan4_TEcYI-k="
                alt="Concepto futurista en salud"
                className="rounded-xl shadow-lg w-full h-[250px] sm:h-[350px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </header>

      {/* Beneficios */}
      <section className="bg-white text-[#192a67] px-6 sm:px-12 lg:px-24 py-16 grid sm:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <Stethoscope size={48} className="text-[#192a67] mb-4" />
          <h3 className="text-xl font-bold mb-2">Acceso Centralizado</h3>
          <p className="text-base">
            Toda la información de medicamentos en una sola plataforma segura.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck size={48} className="text-[#192a67] mb-4" />
          <h3 className="text-xl font-bold mb-2">Dosificación Segura</h3>
          <p className="text-base">
            Reduce errores médicos con protocolos y cálculos confiables.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen size={48} className="text-[#192a67] mb-4" />
          <h3 className="text-xl font-bold mb-2">Aprendizaje Continuo</h3>
          <p className="text-base">
            Protocolos y guías educativas siempre actualizadas para el personal.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-50 text-[#192a67] px-6 sm:px-12 lg:px-24 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Cómo funciona?
        </h2>
        <div className="grid gap-12 sm:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">1. Busca</h3>
            <p>Encuentra el medicamento en la base de datos centralizada.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">2. Consulta</h3>
            <p>Accede a protocolos, dosis y formas de aplicación.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">3. Aplica</h3>
            <p>Implementa la información con seguridad y respaldo clínico.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#192a67] text-white text-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Comienza hoy</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg sm:text-xl">
          Ingresa a la Farmacoteca Digital y optimiza la gestión de medicamentos
          en tu clínica.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1b47] text-white text-center py-6 mt-auto text-sm sm:text-base">
        © {new Date().getFullYear()} Farmacoteca Digital. Todos los derechos
        reservados.
      </footer>
    </div>
  );
}
