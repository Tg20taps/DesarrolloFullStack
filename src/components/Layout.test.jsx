import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout", () => {
  it("debería renderizar el header y el footer", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Contenido de prueba</div>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByText("ManabiGames")).toBeInTheDocument();
    expect(
      screen.getByText(/2025 ManabiGames. Todos los derechos reservados./i)
    ).toBeInTheDocument();
  });

  it("debería renderizar los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Contenido de prueba</div>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /juegos/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contacto/i })).toBeInTheDocument();
  });
});
