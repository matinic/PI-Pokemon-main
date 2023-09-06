import style from "./Home.module.css";
import CardsPages from "../cardsPages/CardsPages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import ReturnBack from "../returnBack/ReturnBack";
import PageButtons from "../pageButtons/PageButtons";

export default function Home({ search, setSearch }) {
  const { render:{home,searchMode}, actualPage} = useSelector((state) => state);
  const { parameter } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if(!Object.keys(home).length) dispatch(getPokemons());
  }, []);

  const paginator = (card) => {
    let pages = [];
    let limitPerPage = 12;
    let j = 1;
    while (card.length) {
      pages[j] = [];
      for (let i = 0; i < limitPerPage; i++) {
        if (!card.length) break;
        pages[j].push(card.shift());
      }
      j++;
    }
    return pages;
  };

  return (
    <div>
      <div className={style.CardsContainer}>
        {search ? (
          <>
            <PageButtons
              pages={paginator([...searchMode])}
              pageNumber={actualPage.searchMode}
              father="searchMode"
            ></PageButtons>
            <ReturnBack forExecution={() => setSearch(false)} />
            <div className={style.searchParameter}>
              <h4>Search Results for: {`"${parameter}"`} </h4>
            </div>
            <CardsPages
              pages={paginator([...searchMode])}
              pageNumber={actualPage.searchMode}
            />
          </>
        ) : (
            <>
            <PageButtons
              pages={paginator([...home])}
              pageNumber={actualPage.home}
              father="home"
            ></PageButtons>
            { searchMode.length ? <ReturnBack forExecution={() => setSearch(true)} direction={true} /> : null}
            <CardsPages
              pages={paginator([...home])}
              pageNumber={actualPage.home}
            />
          </>
        )}
      </div>
    </div>
  );
}
