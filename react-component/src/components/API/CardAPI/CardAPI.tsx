import { ICharacter } from 'api/types';
import styles from './CardAPI.module.css';
import React from 'react';

type CardProps = {
  character: ICharacter;
  toggle: (data: ICharacter) => void;
};

export default function CardAPI({ character, toggle }: CardProps) {
  const { name, status, image } = character;

  const openModal = () => {
    toggle(character);
  };

  return (
    <div className={styles.card}>
      <div
        onClick={openModal}
        className={styles.img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.status}>{status}</div>
      <div className={styles.content}>
        <button onClick={openModal} className={styles.title}>
          <h2>{name}</h2>
        </button>
      </div>
    </div>
  );
}
