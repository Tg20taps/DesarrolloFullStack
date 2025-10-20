import { Link } from "react-router-dom";

const JuegoCard = ({ juego }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00ffcc]/30">
      <div className="absolute inset-0 z-10 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-[#00ffcc]"></div>
      <img
        src={juego.imagen}
        alt={juego.nombre}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold font-orbitron text-[#00ffcc]">{juego.nombre}</h3>
        <p className="mt-2 text-gray-300">{juego.descripcion}</p>
        <Link
          to={`/juegos/${juego.id}`}
          className="mt-4 inline-block rounded-md bg-[#ff2e9d] px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-[#00ffcc] hover:text-black hover:shadow-lg hover:shadow-[#00ffcc]/50"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default JuegoCard;
