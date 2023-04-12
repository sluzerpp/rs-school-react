import { IResponse } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (page = 1, search = '') => {
  const response = await fetch(`${BASE_URL}?page=${page}&name=${search}`, {
    method: 'GET',
  });
  return (await response.json()) as IResponse;
};
