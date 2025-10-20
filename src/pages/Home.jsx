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
    <section className="w-full">
      <div className="text-center py-20 px-6 bg-black/20">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold font-orbitron text-white">
          Bienvenido a <span className="text-[#ff00a0]">ManabiGames</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explora tus juegos clásicos favoritos y sus reseñas.
        </p>
      </div>

      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="relative mb-12 text-center text-3xl font-bold text-[#00f6ff]">
            Juegos Destacados
            <span className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-[#00f6ff]"></span>
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {juegosDestacados.map((juego) => (
              <JuegoCard key={juego.id} juego={juego} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pb-20 px-6">
        <a
          href="/juegos"
          className="inline-block rounded-lg bg-[#f1c40f] px-8 py-4 text-lg font-semibold text-[#0d0221] transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-[#f1c40f]/50 transform hover:scale-105"
        >
          Ver todos los juegos
        </a>
      </div>
    </section>
  );
};

export default Home;
