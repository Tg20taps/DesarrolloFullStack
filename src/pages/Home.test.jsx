import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  it("debería renderizar el título principal", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Bienvenido a ManabiGames")
    ).toBeInTheDocument();
  });

  it("debería renderizar la sección de juegos destacados", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Juegos Destacados")).toBeInTheDocument();
    // Verifica que se rendericen 3 tarjetas de juego
    const juegoCards = screen.getAllByText(/Ver detalle/i);
    expect(juegoCards).toHaveLength(3);
  });

  it('debería renderizar el botón "Ver todos los juegos"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /ver todos los juegos/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/juegos");
  });
});
