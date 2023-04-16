import React from 'react';
import { describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { CardData } from './src/model/CardData';
import App from './src/App';
import CardList from './src/components/CardList/CardList';
import { MemoryRouter } from 'react-router-dom';
import WrappedApp from './src/WrappedApp';
import { IResponse } from 'api/types';
import CardAPI from './src/components/API/CardAPI/CardAPI';
import CardWidget from './src/components/API/CardWidget/CardWidget';
import CardModal from './src/components/API/CardModal/CardModal';

function createFetchResponse(data: object) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

const data: IResponse = {
  info: {
    count: 826,
    pages: 42,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
  ],
};

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

describe('api', () => {
  it('Render CardAPI', () => {
    render(<CardAPI toggle={() => {}} character={data.results[0]} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(data.results[0].name);
  });

  global.fetch = vi.fn().mockResolvedValue(createFetchResponse(data));

  it('Open modal', () => {
    render(<WrappedApp></WrappedApp>);
    setTimeout(() => {
      fireEvent.click(screen.getByRole('heading', { level: 2 }));
      expect(screen.getByText('X')).toBeInTheDocument();
    }, 100);
  });

  it('render modal', () => {
    render(<CardModal toggle={() => {}} character={data.results[0]}></CardModal>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(data.results[0].name);
  });

  it('render found count', () => {
    render(<WrappedApp></WrappedApp>);
    setTimeout(() => {
      expect(screen.getByText(data.info.count)).toBeInTheDocument();
    }, 100);
  });
});
