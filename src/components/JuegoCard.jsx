const JuegoCard = ({ juego }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
      <img
        src={juego.imagen}
        alt={juego.nombre}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-[#00ffcc]">{juego.nombre}</h3>
      <p className="text-gray-300 mt-2">{juego.descripcion}</p>
      <a
        href={`/juegos/${juego.id}`}
        className="inline-block mt-4 bg-[#ff2e9d] hover:bg-[#00ffcc] px-4 py-2 rounded-md text-white font-semibold transition"
      >
        Ver Detalles
      </a>
    </div>
  );
};

export default JuegoCard;
