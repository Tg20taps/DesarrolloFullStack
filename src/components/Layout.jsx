import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0221] text-[#f0f0f0] font-rajdhani">
      <header className="bg-black/30 backdrop-blur-sm p-4 flex justify-between items-center shadow-lg border-b-2 border-[#ff00a0] sticky top-0 z-50">
        <Link to="/">
          <h1 className="text-3xl font-orbitron text-[#00f6ff] hover:text-[#ff00a0] transition-colors duration-300">
            ManabiGames
          </h1>
        </Link>
        <nav className="space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 hover:text-[#00f6ff] transition-colors duration-300 ${
                isActive ? "text-[#00f6ff] border-b-2 border-[#00f6ff]" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/juegos"
            className={({ isActive }) =>
              `pb-1 hover:text-[#00f6ff] transition-colors duration-300 ${
                isActive ? "text-[#00f6ff] border-b-2 border-[#00f6ff]" : "text-white"
              }`
            }
          >
            Juegos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `pb-1 hover:text-[#00f6ff] transition-colors duration-300 ${
                isActive ? "text-[#00f6ff] border-b-2 border-[#00f6ff]" : "text-white"
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer className="bg-black/30 p-4 text-center text-gray-400 border-t-2 border-[#00f6ff]">
        &copy; {new Date().getFullYear()} ManabiGames. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
