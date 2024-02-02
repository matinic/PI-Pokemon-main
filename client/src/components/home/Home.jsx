import style from "./Home.module.css";
import CardsPages from "../cardsPages/CardsPages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import PageButtons from "../pageButtons/PageButtons";
import { useLocation } from "react-router-dom";
import LeftArrow from "../leftArrow/LeftArrow";



export default function Home({paginator}) {

  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const { render, actualPage } = useSelector((state) => state);
  const pages = paginator([...render[pathname]])
  const pageNumber = actualPage[pathname]
  const valueExist = Object.keys(render[pathname]).length

  useEffect(() => {
    if(!valueExist) dispatch(getPokemons());
  }, []);

  return (
    <div>
      <div className={style.CardsContainer}>
          <PageButtons pages={pages} father={pathname} pageNumber={pageNumber}/>
          {pathname === '/search' ?
              <LeftArrow/>
            : null
            }
          {
            valueExist ?
            <CardsPages pages={pages} pageNumber={pageNumber}/>
            : <h1>Loading...</h1>
            }
      </div>
    </div>
  );
}
