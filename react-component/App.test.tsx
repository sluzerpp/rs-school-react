import React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardData } from './src/model/CardData';
import App from './src/App';
import CardList from './src/components/CardList/CardList';
import { MemoryRouter } from 'react-router-dom';
import WrappedApp from './src/WrappedApp';

describe('Cards', () => {
  render(<CardList projects={CardData}></CardList>);
  it('render Card List component', () => {
    expect(screen.getAllByRole('heading', { level: 2 }).length).toEqual(10);
  });
});

describe('App', () => {
  it('Renders <Main Page>', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('/');
  });

  it('Renders <About Page>', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('/about');
  });

  it('Renders <Forms Page>', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('/forms');
  });

  it('Renders <404 Page>', () => {
    render(
      <MemoryRouter initialEntries={["/this-route-doesn't-exist"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('/404');
  });
});
