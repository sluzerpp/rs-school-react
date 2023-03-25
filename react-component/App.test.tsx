import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { CardData } from './src/model/CardData';
import App from './src/App';
import Card from './src/components/Card/Card';
import CardList from './src/components/CardList/CardList';
import Forms from './src/pages/Forms';

describe('Cards', () => {
  CardData.forEach((data) => {
    const { queryAllByText } = render(<Card project={data}></Card>);
    test(`render ${data.name} card`, () => {
      expect(queryAllByText(new RegExp(`${data.name}`, 'i')));
    });
  });
  test('render Card List component', () => {
    CardData.forEach((data) => {
      const { queryAllByText } = render(<CardList projects={CardData}></CardList>);
      expect(queryAllByText(new RegExp(`${data.name}`, 'i')));
    });
  });
});

describe('Forms', () => {
  test('render Forms', () => {
    expect(render(<Forms />));
  });
});

describe('App', () => {
  test('render App Component', () => {
    expect(render(<App></App>));
  });
});
