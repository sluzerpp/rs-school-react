import CardForm from '../components/CardForm/CardForm';
import React, { Component } from 'react';
import { IFormProjectData, IProjectData } from 'model/CardData';
import CardList from '../components/CardList/CardList';

type IFormsState = {
  cards: IProjectData[];
  currentId: number;
};

export default class Forms extends Component<object, IFormsState> {
  state = {
    cards: [],
    currentId: 0,
  };

  constructor(props: object) {
    super(props);
    this.addCard = this.addCard.bind(this);
  }

  addCard(data: IFormProjectData) {
    this.setState((prev) => {
      prev.cards.push({ ...data, id: this.state.currentId });
      return { cards: prev.cards, currentId: prev.currentId + 1 };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-page">
          <CardForm submitCallback={this.addCard} />
          <CardList projects={this.state.cards}></CardList>
        </div>
      </div>
    );
  }
}
