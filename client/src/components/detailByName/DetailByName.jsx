import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, wipeError } from "../../redux/actions";


export default function DetailByName() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { pokemonByName, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getPokemonByName(name));
    dispatch(wipeError());
  }, [name]);
  const card = pokemonByName;

  return (
    <div>
      
    </div>
  );
}
