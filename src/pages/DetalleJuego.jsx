import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { juegos } from "../data/juegos";

const DetalleJuego = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    const encontrado = juegos.find((j) => j.id === parseInt(id));
    setJuego(encontrado);
  }, [id]);

  if (!juego) {
    return <div className="text-center mt-20 text-gray-400">Cargando detalles del juego...</div>;
  }

  return (
    <section className="p-8 text-center">
      <img
        src={juego.imagen}
        alt={juego.titulo}
        className="rounded-2xl w-full max-w-xl mx-auto mb-6 shadow-lg"
      />
      <h2 className="text-3xl text-[#00ffcc] font-orbitron mb-4">{juego.titulo}</h2>
      <p className="text-gray-300 mb-4">{juego.descripcion}</p>
      <p className="text-[#9d00ff] font-medium mb-6">{juego.genero}</p>

      <Link
        to="/juegos"
        className="text-[#ff2e9d] hover:text-[#00ffcc] transition font-semibold"
      >
        ← Volver al catálogo
      </Link>
    </section>
  );
};

export default DetalleJuego;
