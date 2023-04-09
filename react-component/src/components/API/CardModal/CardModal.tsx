import { ICharacter } from 'api/types';
import React from 'react';
import styles from './CardModal.module.css';

type ModalProps = {
  toggle: () => void;
  character: ICharacter;
};

export default function CardModal({ character, toggle }: ModalProps) {
  const onModalBgClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!e.target.classList.contains(styles.modal)) return;
    toggle();
  };

  return (
    <div onClick={onModalBgClick} className={styles.modal}>
      <div className={styles.content}>
        <button onClick={toggle} className={styles.close}>
          x
        </button>
        <h2 className={styles.title}>{character.name}</h2>
        <div className={styles.img} style={{ backgroundImage: `url(${character.image})` }}></div>
        <div className={styles.infos}>
          <div className={styles.info + ' ' + styles.big}>Status: {character.status}</div>
          <div className={styles.info}>Gender: {character.gender}</div>
          <div className={styles.info}>Species: {character.species}</div>
          <div className={styles.info}>Origin: {character.origin.name}</div>
          <div className={styles.info}>Location: {character.location.name}</div>
          <div className={styles.info}>Type: {character.type || 'Empty'}</div>
        </div>
      </div>
    </div>
  );
}
