import styles from "./Home.module.css";
import CardsPages from "../cardsPages/CardsPages";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonsDb } from "../../redux/actions";

export default function Home({ search, onSearch }) {
  const { allPokemons, allPokemonsDb, actual, actualPage, pokemonByName } =
    useSelector((state) => state);
  const [searched, setSearched] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    if (Object.keys(pokemonByName).length) setSearched(true);
  }, [pokemonByName]);

  return (
    <div>
      <div className={styles.CardsContainer}>
        {search ? (
          <CardsPages
            cards={searched ? pokemonByName : []}
            page={actualPage.searchBar}
            father="searchBar"
            onSearch={onSearch}
            search={search}
          />
        ) : (
          <CardsPages
            cards={allPokemons}
            page={actualPage.home}
            father="home"
          />
        )}
      </div>
    </div>
  );
}
