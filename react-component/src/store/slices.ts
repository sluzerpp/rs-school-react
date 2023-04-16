import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse } from 'api/types';

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
