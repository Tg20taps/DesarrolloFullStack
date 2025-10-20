import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-[#00ffcc] font-orbitron">
          ManabiGames
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-[#ff2e9d] transition">Home</Link>
          <Link to="/juegos" className="hover:text-[#ff2e9d] transition">Juegos</Link>
          <Link to="/contacto" className="hover:text-[#ff2e9d] transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
