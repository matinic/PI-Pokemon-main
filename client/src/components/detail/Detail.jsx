import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, wipePokemon } from "../../redux/actions";
import LeftArrow from "../leftArrow/LeftArrow";
import style from "./Detail.module.css";


export default function DetailById() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const card = useSelector((state) => state.pokemonDetail);
  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => {
      dispatch(wipePokemon());
    };
  }, []);

  const statsName = ["hp", "attack", "deffense", "speed", "height", "weight"];

  const stats = statsName.map((stat) => (
    <div className={style.numberContainer} key={stat}>
      <h4>{stat.toUpperCase()}</h4>
      <div>{card[stat]}</div>
    </div>
  ));

  const types = card.types?.map(type => (
      <div key={type}>{type.toUpperCase()}</div>
  ))

  return (
    <>
    <LeftArrow/>
    <div className={style.cardContainer}>
  
      <h1 className={style.name}>{card.name?.toUpperCase()}</h1>

      <img src={card.image} className={style.image} />
      <div className={style.types}>{types}</div>

      <div className={style.statsContainer}>
        <div className={style.wrapper}>{[stats[0], stats[1], stats[2]]}</div>
        <div className={style.wrapper}>{[stats[3], stats[4], stats[5]]}</div>
      </div>

    </div>
    </>
  );
}
