import { Link } from "react-router-dom";

const JuegoCard = ({ juego }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00f6ff]/30 border border-white/20">
      <div className="overflow-hidden">
        <img
          src={juego.imagen}
          alt={juego.nombre}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className="p-4 absolute bottom-0 left-0 right-0 flex flex-col items-start">
        <h3 className="text-2xl font-bold font-orbitron text-white drop-shadow-lg">{juego.nombre}</h3>
        <div className="overflow-hidden h-0 group-hover:h-24 transition-all duration-500 ease-in-out">
            <p className="mt-2 text-gray-300 transition-opacity duration-300">{juego.descripcion}</p>
            <Link
              to={`/juegos/${juego.id}`}
              className="mt-4 inline-block rounded-md bg-[#ff00a0] px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-[#00f6ff] hover:text-black"
            >
              Ver Detalles
            </Link>
        </div>
      </div>
    </div>
  );
};

export default JuegoCard;
