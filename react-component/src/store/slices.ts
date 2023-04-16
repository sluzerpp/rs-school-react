import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse } from 'api/types';
import { IProjectData } from '../model/CardData';
import { CardFormData } from '../components/CardForm/CardForm';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<IResponse, { page: number; search?: string }>({
      query: ({ page = 1, search = '' }) => `character?page=${page}&name=${search}`,
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { update: updateSearch } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

const initialState: { cards: IProjectData[]; id: number } = {
  cards: [],
  id: 0,
};

const formCardSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardFormData>) => {
      const url = URL.createObjectURL(action.payload.img[0]);
      state.cards.push({
        ...action.payload,
        img: url,
        likes: 0,
        views: 0,
        id: state.id,
      });
      state.id += 1;
    },
  },
});

export const { addCard: addFormCard } = formCardSlice.actions;

export const fromCardReducer = formCardSlice.reducer;
