import { useState } from "react";
import style from "./SearchBar.module.css";
import { getPokemonByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { searchParameter } from "../../redux/actions";

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSearchHandler = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    onSearch(true);
    dispatch(searchParameter(name));
  };
  const inputValue = ({ target }) => {
    setName(target.value);
  };

  return (
    <div>
      <form className={style.formContainer}>
        <input
          type="buscar pokemon"
          value={name}
          onChange={inputValue}
          name="onSearch"
        />
        <button onClick={onSearchHandler}>buscar</button>
      </form>
    </div>
  );
}
