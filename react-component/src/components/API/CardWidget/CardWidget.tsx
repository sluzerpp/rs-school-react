import SearchBar from '../../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import ListAPI from '../ListAPI/ListAPI';
import { ICharacter } from '../../../api/types';
import Spinner from '../../../components/spinner/Spinner';
import styles from './CardWidget.module.css';
import CardModal from '../CardModal/CardModal';
import { useGetCharactersQuery } from '../../../store/slices';
import { useAppSelector } from './../../../store';

const DEFAULT_PAGE = 1;

export default function CardWidget() {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { search: searchState } = useAppSelector((state) => state.search);
  const [search, setSearch] = useState(searchState);
  const [isModal, setIsModal] = useState(false);
  const [modalCharacter, setModalCharacter] = useState<ICharacter>();

  const { data: response, error, isFetching } = useGetCharactersQuery({ page, search });

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
    fetch(`https://rickandmortyapi.com/api/character/${data.id}`, {
      method: 'GET',
    })
      .then(async (res) => (await res.json()) as ICharacter)
      .then((data) => {
        setModalCharacter(data);
        setIsModal(true);
      });
  };

  return (
    <>
      <div className={styles.controls}>
        <SearchBar callback={onInputSubmit}></SearchBar>
      </div>
      {!isFetching ? (
        <>
          {error ? (
            <h2>There is nothing here</h2>
          ) : (
            <>
              <h2>Found {response && response.info ? response.info.count : 0} characters</h2>
              <ListAPI toggle={toggleModal} characters={response ? response.results : []}></ListAPI>
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}
      {response && response.info && !error && (
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
