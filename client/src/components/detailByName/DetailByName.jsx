import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, wipeError } from "../../redux/actions";
import Detail from "../detail/Detail";

export default function DetailByName() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { pokemonByName, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getPokemonByName(name));
    dispatch(wipeError());
  }, [name, dispatch]);
  const card = pokemonByName;

  return (
    <div>
      {!error ? <Detail card={card}></Detail> : <h2>Pokemon No Encontrado</h2>}
    </div>
  );
}
