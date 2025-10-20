import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-rajdhani">
      <header className="bg-[#1a1a1a] p-4 flex justify-between items-center shadow-lg border-b-2 border-[#ff2e9d]">
        <Link to="/">
          <h1 className="text-3xl font-orbitron text-[#00ffcc] hover:text-[#ff2e9d] transition-colors duration-300">
            ManabiGames
          </h1>
        </Link>
        <nav className="space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#00ffcc] transition-colors duration-300 ${
                isActive ? "text-[#00ffcc]" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/juegos"
            className={({ isActive }) =>
              `hover:text-[#00ffcc] transition-colors duration-300 ${
                isActive ? "text-[#00ffcc]" : "text-white"
              }`
            }
          >
            Juegos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `hover:text-[#00ffcc] transition-colors duration-300 ${
                isActive ? "text-[#00ffcc]" : "text-white"
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="bg-[#1a1a1a] p-4 text-center text-gray-400 border-t-2 border-[#00ffcc]">
        &copy; {new Date().getFullYear()} ManabiGames. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
