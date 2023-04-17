import CardForm, { CardFormData } from '../components/CardForm/CardForm';
import React from 'react';
import CardList from '../components/CardList/CardList';
import { useAppDispatch, useAppSelector } from '../store';
import { addFormCard } from '../store/slices';

export default function Forms() {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.formCard);

  const addCard = (data: CardFormData) => {
    dispatch(addFormCard(data));
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
