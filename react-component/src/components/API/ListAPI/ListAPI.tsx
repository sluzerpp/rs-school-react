import { ICharacter } from 'api/types';
import React from 'react';
import styles from './ListAPI.module.css';
import CardAPI from '../CardAPI/CardAPI';

type ListProps = {
  characters: ICharacter[];
  toggle: (data: ICharacter) => void;
};

export default function ListAPI({ characters, toggle }: ListProps) {
  return (
    <div className={styles.list}>
      {characters && characters.length !== 0 ? (
        characters.map((character) => (
          <CardAPI toggle={toggle} key={character.id} character={character}></CardAPI>
        ))
      ) : (
        <h2>Ничего не найдено</h2>
      )}
    </div>
  );
}
