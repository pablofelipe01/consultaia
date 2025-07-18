"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dvnuttrox/video/upload/v1752782664/Corte_data_lab_1_cahvbu.mov" 
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Minimal Navbar */}
      <nav className="relative z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white">
                Data Lab IA
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  href="/consultoria" 
                  className="text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  Consultoría
                </Link>
                <Link 
                  href="/bitacora" 
                  className="text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  Bitácora
                </Link>
                <Link 
                  href="/comentarios" 
                  className="text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  Comentarios
                </Link>
                <Link 
                  href="/about" 
                  className="text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  Acerca de
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Abrir menú principal</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-md">
              <Link
                href="/consultoria"
                className="text-white hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultoría
              </Link>
              <Link
                href="/bitacora"
                className="text-white hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Bitácora
              </Link>
              <Link
                href="/comentarios"
                className="text-white hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comentarios
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Data Lab IA
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Soluciones avanzadas de inteligencia artificial para el sector sanitario y de investigación
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Transformamos datos en insights valiosos para mejorar la toma de decisiones en el ámbito médico y científico
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/consultoria"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Comenzar Consultoría
            </Link>
            <Link
              href="/bitacora"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Bitácora Temporal
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">IA Avanzada</h3>
                <p className="text-gray-300">
                  Utilizamos los últimos avances en inteligencia artificial para análisis de datos médicos
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-check text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Bitácora Inteligente</h3>
                <p className="text-gray-300">
                  Registro y análisis temporal de datos con precisión y eficiencia
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Análisis Predictivo</h3>
                <p className="text-gray-300">
                  Predicciones basadas en datos para mejorar los resultados clínicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="relative z-20 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2025 Data Lab IA. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
