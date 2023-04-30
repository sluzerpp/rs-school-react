import './CardList.css';
import Card from '../../components/Card/Card';
import { IProjectData } from 'model/CardData';
import React from 'react';

type CardListProps = {
  projects: IProjectData[];
};

export default function CardList({ projects }: CardListProps) {
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
