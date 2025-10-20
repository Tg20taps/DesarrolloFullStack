const JuegoCard = ({ juego }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg text-white border-2 border-cyan-300/50 shadow-lg rounded-2xl p-4 flex flex-col h-full transition-all duration-300 hover:border-fuchsia-500/80 hover:shadow-fuchsia-500/80 transform hover:-translate-y-2">
      <img
        src={juego.imagen}
        alt={juego.nombre}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-300">{juego.nombre}</h3>
        <p className="text-gray-300 mt-2 flex-grow">{juego.descripcion}</p>
        <a
          href={`/juegos/${juego.id}`}
          className="inline-block mt-4 bg-fuchsia-600 hover:bg-cyan-400 px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 text-center"
        >
          Ver detalle
        </a>
      </div>
    </div>
  );
};

export default JuegoCard;
