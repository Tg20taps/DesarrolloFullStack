const BASE_URL = 'https://manabigamesfull-production.up.railway.app/api';

export async function obtenerJuegos() {
  const res = await fetch(`${BASE_URL}/juegos`);
  if (!res.ok) throw new Error('Error al obtener juegos');
  return res.json();
}

export async function obtenerJuego(id) {
  const res = await fetch(`${BASE_URL}/juegos/${id}`);
  if (!res.ok) throw new Error('Error al obtener juego');
  return res.json();
}
