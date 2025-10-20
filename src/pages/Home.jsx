import JuegoCard from "../components/JuegoCard";

const Home = () => {
  const juegosDestacados = [
    {
      id: 1,
      nombre: "The Legend of Zelda",
      imagen: "/src/assets/zelda.png",
      descripcion: "Una aventura épica en el reino de Hyrule.",
    },
    {
      id: 2,
      nombre: "Super Metroid",
      imagen: "/src/assets/supermetroid.png",
      descripcion: "Embárcate como Samus Aran y viaja al planeta Zebes.",
    },
    {
      id: 3,
      nombre: "Chrono Trigger",
      imagen: "/src/assets/chronotrigger.png",
      descripcion: "Viaja en el tiempo y evita una catástrofe mundial.",
    },
  ];

  return (
    <section>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-cyan-300 mb-4 drop-shadow-[0_0_10px_#00ffcc]">
          Bienvenido a ManabiGames
        </h1>
        <p className="text-gray-300 text-xl">
          Tu portal a los clásicos inolvidables.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 text-center drop-shadow-[0_0_8px_#ff2e9d]">
          Juegos Destacados
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {juegosDestacados.map((juego) => (
            <JuegoCard key={juego.id} juego={juego} />
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="/juegos"
          className="inline-block bg-fuchsia-600/80 hover:bg-cyan-400/80 border-2 border-fuchsia-500 hover:border-cyan-300 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 shadow-[0_0_15px_#ff2e9d] hover:shadow-[0_0_20px_#00ffcc]"
        >
          Ver todos los juegos
        </a>
      </div>
    </section>
  );
};

export default Home;
