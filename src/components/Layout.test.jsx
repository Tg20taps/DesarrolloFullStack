import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  test('renders header with logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    expect(screen.getByText('ManabiGames')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Juegos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  test('renders footer with copyright information', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} ManabiGames. Todos los derechos reservados.`)).toBeInTheDocument();
  });
});
