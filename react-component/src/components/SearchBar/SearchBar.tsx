import { useAppDispatch, useAppSelector } from './../../store';
import './SearchBar.css';
import React from 'react';
import { updateSearch } from '../../store/slices';

type SearchProps = {
  callback: (data: string) => void;
};

export default function SearchBar({ callback }: SearchProps) {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(updateSearch(value));
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      callback(search);
    }
  };

  return (
    <div className="search">
      <input
        value={search}
        onChange={onChangeHandler}
        onKeyUp={onEnter}
        placeholder="Search..."
      ></input>
      <button className="search__btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
        </svg>
      </button>
    </div>
  );
}
