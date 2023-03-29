import './CardList.css';
import Card from '../../components/Card/Card';
import { IProjectData } from 'model/CardData';
import React, { Component } from 'react';

type CardListProps = {
  projects: IProjectData[];
};

export default class CardList extends Component<CardListProps> {
  render() {
    const { projects } = this.props;
    return (
      <div className="card-list">
        {projects.length > 0 ? (
          projects.map((project) => <Card key={project.id} project={project} />)
        ) : (
          <h2 className="card-list__title">Пусто</h2>
        )}
      </div>
    );
  }
}
