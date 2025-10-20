import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import JuegoCard from "./JuegoCard";

const mockJuego = {
  id: 1,
  nombre: "The Legend of Zelda",
  imagen: "/src/assets/zelda.png",
  descripcion: "Una aventura épica en el reino de Hyrule.",
};

describe("JuegoCard", () => {
  it("debería renderizar los detalles del juego correctamente", () => {
    render(<JuegoCard juego={mockJuego} />);

    expect(screen.getByText("The Legend of Zelda")).toBeInTheDocument();
    expect(
      screen.getByText("Una aventura épica en el reino de Hyrule.")
    ).toBeInTheDocument();
    expect(screen.getByAltText("The Legend of Zelda")).toBeInTheDocument();
  });

  it("debería tener un enlace con el href correcto", () => {
    render(<JuegoCard juego={mockJuego} />);

    const link = screen.getByRole("link", { name: /ver detalle/i });
    expect(link).toHaveAttribute("href", "/juegos/1");
  });
});
