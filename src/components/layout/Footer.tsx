import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-2xl font-bold">Data Lab IA</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Soluciones avanzadas de inteligencia artificial para el sector sanitario y de investigación.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Servicios
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/consultoria" className="text-base text-gray-300 hover:text-white transition-colors">
                      Consultoría IA
                    </Link>
                  </li>
                  <li>
                    <Link href="/bitacora" className="text-base text-gray-300 hover:text-white transition-colors">
                      Bitácora Temporal
                    </Link>
                  </li>
                  <li>
                    <Link href="/comentarios" className="text-base text-gray-300 hover:text-white transition-colors">
                      Comentarios
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white transition-colors">
                      Acerca de
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Contacto
                </h3>
                <div className="mt-4 space-y-4">
                  <p className="text-base text-gray-300">
                    <i className="fas fa-envelope mr-2"></i>
                    info@datalabai.com
                  </p>
                  <p className="text-base text-gray-300">
                    <i className="fas fa-phone mr-2"></i>
                    +1 (555) 123-4567
                  </p>
                  <p className="text-base text-gray-300">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 Data Lab IA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
