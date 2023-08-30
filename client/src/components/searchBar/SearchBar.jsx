import { useState } from "react";
import style from "./SearchBar.module.css";
import { searchPokemons, actualPage, searchParameter, wipeSearch } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setSearch }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSearchHandler = (e) => {
    e.preventDefault();
    dispatch(searchPokemons(name));
    setSearch(true);
    dispatch(searchParameter(name));
    dispatch(actualPage(1 , "searchMode") );
    navigate('/home')
    if(!e.target.value) {
        dispatch(wipeSearch())
    }
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
