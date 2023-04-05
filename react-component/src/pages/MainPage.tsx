import SearchBar from '../components/SearchBar/SearchBar';
import React from 'react';
import { CardData } from '../model/CardData';
import CardList from '../components/CardList/CardList';

export default function MainPage() {
  return (
    <div className="container">
      <div className="main">
        <div className="controls">
          <SearchBar></SearchBar>
        </div>
        <CardList projects={CardData}></CardList>
      </div>
    </div>
  );
}
