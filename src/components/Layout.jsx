import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header con efecto de cristal y borde de neón */}
      <header className="bg-white/5 backdrop-blur-lg border-b-2 border-cyan-300/50 shadow-lg p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-cyan-300 tracking-wider">
            ManabiGames
          </h1>
          <nav className="space-x-6 text-lg">
            <Link
              className="text-fuchsia-400 hover:text-cyan-300 transition-all duration-300 relative group"
              to="/"
            >
              Home
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              className="text-fuchsia-400 hover:text-cyan-300 transition-all duration-300 relative group"
              to="/juegos"
            >
              Juegos
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              className="text-fuchsia-400 hover:text-cyan-300 transition-all duration-300 relative group"
              to="/contacto"
            >
              Contacto
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-8">{children}</main>

      {/* Footer con efecto de cristal y borde de neón */}
      <footer className="bg-white/5 backdrop-blur-lg border-t-2 border-fuchsia-500/50 shadow-lg p-4 text-center text-gray-400">
        <div className="container mx-auto">
          &copy; 2025 ManabiGames. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
