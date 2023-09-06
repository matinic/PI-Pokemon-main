import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, wipePokemon } from "../../redux/actions";
import Detail from "../detail/Detail";


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

  return (
    <div>
      <Detail card={card}> </Detail>
    </div>
  );
}
