import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-rajdhani">
      <header className="bg-[#1a1a1a] p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-orbitron text-[#00ffcc]">ManabiGames</h1>
        <nav className="space-x-4 text-[#ff2e9d]">
          <Link className="hover:text-[#00ffcc]" to="/">Home</Link>
          <Link className="hover:text-[#00ffcc]" to="/juegos">Juegos</Link>
          <Link className="hover:text-[#00ffcc]" to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="bg-[#1a1a1a] p-4 text-center text-gray-400">
        &copy; 2025 ManabiGames. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
