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
    <section className="p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-orbitron text-[#00ffcc] mb-4">
          Bienvenido a ManabiGames
        </h1>
        <p className="text-gray-300 text-lg">
          Explora tus juegos clásicos favoritos y sus reseñas.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#ff2e9d] mb-6 text-center">
          Juegos Destacados
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {juegosDestacados.map((juego) => (
            <JuegoCard key={juego.id} juego={juego} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/juegos"
          className="inline-block bg-[#9d00ff] hover:bg-[#6c63ff] px-6 py-3 rounded-lg text-white font-semibold transition"
        >
          Ver todos los juegos
        </a>
      </div>
    </section>
  );
};

export default Home;
