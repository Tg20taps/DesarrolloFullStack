import { useState } from "react";
import JuegoCard from "../components/JuegoCard";
import SearchBar from "../components/SearchBar";

const Juegos = () => {
  const juegos = [
    { id: 1, nombre: "The Legend of Zelda", imagen: "/src/assets/zelda.png", descripcion: "Una aventura épica en Hyrule." },
    { id: 2, nombre: "Super Metroid", imagen: "/src/assets/supermetroid.png", descripcion: "Viaja al planeta Zebes como Samus." },
    { id: 3, nombre: "Chrono Trigger", imagen: "/src/assets/chronotrigger.png", descripcion: "Evita catástrofes viajando en el tiempo." },
  ];

  const [filtro, setFiltro] = useState("");

  const juegosFiltrados = juegos.filter((j) =>
    j.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="text-center p-6">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">Catálogo de Juegos</h2>
      
      <SearchBar onSearch={setFiltro} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {juegosFiltrados.map((juego) => (
          <JuegoCard key={juego.id} juego={juego} />
        ))}
      </div>
    </section>
  );
};

export default Juegos;
