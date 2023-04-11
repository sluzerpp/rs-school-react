import SearchBar from '../../../components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import ListAPI from '../ListAPI/ListAPI';
import { ICharacter, IResponse } from '../../../api/types';
import { getCharacters } from '../../../api/api';
import Spinner from '../../../components/spinner/Spinner';
import styles from './CardWidget.module.css';
import CardModal from '../CardModal/CardModal';

const DEFAULT_PAGE = 1;

export default function CardWidget() {
  const [response, setResponse] = useState<IResponse>();
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [modalCharacter, setModalCharacter] = useState<ICharacter>();

  const onInputSubmit = (search: string) => {
    setSearch(search);
  };

  const rigthBtnHandler = () => {
    if (!response) return;
    if (page < response.info.pages) {
      setPage((prev) => prev + 1);
    }
  };

  const leftBtnHandler = () => {
    if (!response) return;
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const toggleModal = (data: ICharacter) => {
    setModalCharacter(data);
    setIsModal(true);
  };

  useEffect(() => {
    setIsLoading(true);
    console.log(search);
    getCharacters(page, search)
      .then((val) => setResponse(val))
      .finally(() => setIsLoading(false));
  }, [page, search]);

  useEffect(() => {
    const search = localStorage.getItem('search');
    setSearch(search || '');
    setIsLoading(true);
    getCharacters(DEFAULT_PAGE, search || '')
      .then((val) => setResponse(val))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className={styles.controls}>
        <SearchBar callback={onInputSubmit}></SearchBar>
      </div>
      {!isLoading ? (
        <>
          <h2>Found {response && response.info ? response.info.count : 0} characters</h2>
          <ListAPI toggle={toggleModal} characters={response ? response.results : []}></ListAPI>
        </>
      ) : (
        <Spinner />
      )}
      {response && response.info && (
        <div className={styles.pagination}>
          <button onClick={leftBtnHandler} className={styles.btn}>
            {'<'}
          </button>
          <div className={styles.fraction}>{`${page}/${response.info.pages}`}</div>
          <button onClick={rigthBtnHandler} className={styles.btn}>
            {'>'}
          </button>
        </div>
      )}
      {isModal && modalCharacter && (
        <CardModal toggle={() => setIsModal((prev) => !prev)} character={modalCharacter} />
      )}
    </>
  );
}
