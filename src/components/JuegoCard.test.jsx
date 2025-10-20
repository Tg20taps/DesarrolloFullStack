import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import JuegoCard from './JuegoCard';

const mockJuego = {
  id: 1,
  nombre: 'Test Game',
  descripcion: 'This is a test game.',
  imagen: '/test-image.png',
};

describe('JuegoCard', () => {
  test('renders game information correctly', () => {
    render(
      <BrowserRouter>
        <JuegoCard juego={mockJuego} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Game')).toBeInTheDocument();
    expect(screen.getByText('This is a test game.')).toBeInTheDocument();
    expect(screen.getByAltText('Test Game')).toBeInTheDocument();
  });

  test('renders "Ver Detalles" link with correct href', () => {
    render(
      <BrowserRouter>
        <JuegoCard juego={mockJuego} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: /ver detalles/i });
    expect(link).toHaveAttribute('href', '/juegos/1');
  });

  test('image has correct alt attribute', () => {
    render(
      <BrowserRouter>
        <JuegoCard juego={mockJuego} />
      </BrowserRouter>
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Test Game');
  });
});
