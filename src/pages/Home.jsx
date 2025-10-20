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
      descripcion: "Embarcate como Samus Aran y viaja al planeta Zebes.",
    },
    {
      id: 3,
      nombre: "Chrono Trigger",
      imagen: "/src/assets/chronotrigger.png",
      descripcion: "Viaja en el tiempo y evita una catástrofe mundial.",
    },
  ];

  return (
    <section className="container mx-auto p-6">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold font-orbitron text-white">
          Bienvenido a <span className="text-[#00ffcc]">ManabiGames</span>
        </h1>
        <p className="text-lg text-gray-300">
          Explora tus juegos clásicos favoritos y sus reseñas.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="relative mb-8 text-center text-3xl font-bold text-[#ff2e9d]">
          Juegos Destacados
          <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-[#ff2e9d]"></span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {juegosDestacados.map((juego) => (
            <JuegoCard key={juego.id} juego={juego} />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/juegos"
          className="inline-block rounded-lg bg-[#9d00ff] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#6c63ff] hover:shadow-lg hover:shadow-[#9d00ff]/50"
        >
          Ver todos los juegos
        </a>
      </div>
    </section>
  );
};

export default Home;
