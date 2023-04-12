import CardForm, { CardFormData } from '../components/CardForm/CardForm';
import React, { useState } from 'react';
import { IProjectData } from 'model/CardData';
import CardList from '../components/CardList/CardList';

export default function Forms() {
  const [cards, setCards] = useState<IProjectData[]>([]);
  const [currentId, setCurrentId] = useState(0);

  const addCard = (data: CardFormData) => {
    const url = URL.createObjectURL(data.img[0]);
    setCards((prev) => {
      prev.push({
        ...data,
        img: url,
        likes: 0,
        views: 0,
        id: currentId,
      });
      setCurrentId((prev) => prev + 1);
      return prev;
    });
  };

  return (
    <div className="container">
      <div className="form-page">
        <CardForm submitCallback={addCard} />
        <CardList projects={cards}></CardList>
      </div>
    </div>
  );
}
