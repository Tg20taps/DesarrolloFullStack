import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  test('renders the main heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', { name: /Bienvenido a ManabiGames/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the featured games section with three games', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const gameCards = screen.getAllByRole('link', { name: /ver detalles/i });
    expect(gameCards).toHaveLength(3);
  });
});
