import './Card.css';
import LikeSvg from '../../components/svg/LikeSvg';
import { IProjectData } from '../../model/CardData';
import React, { Component } from 'react';
import EyeSvg from '../../components/svg/EyeSvg';
import StarSvg from '../../components/svg/StarSvg';

type CardProps = {
  project: IProjectData;
};

export default class Card extends Component<CardProps> {
  render() {
    const { name, img, creator, views, likes, tags, date, isImportant } = this.props.project;
    return (
      <div className="card">
        <div className="card__img" style={{ backgroundImage: `url(${img})` }}></div>
        {isImportant && <div className="card__important">Important</div>}
        <div className="card__content">
          <a href="#" className="card__title">
            {name}
          </a>
          <div className="card__date">{date.toLocaleDateString()}</div>
          <a href="#" className="card__creator">
            by <span>{creator}</span>
          </a>
        </div>
        <div className="card__tags">
          {tags.reduce((acc, cur) => (acc ? `${acc}, ${cur}` : cur), '')}
        </div>
        <div className="card__footer">
          <div className="card__counters">
            <button className="card__counter">
              <LikeSvg />
              {likes}
            </button>
            <div className="card__counter">
              <EyeSvg />
              {views}
            </div>
          </div>
          <button className="card__favorite">
            <StarSvg />
          </button>
        </div>
      </div>
    );
  }
}
