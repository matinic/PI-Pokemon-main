import { useState } from "react";
import style from "./SearchBar.module.css";
import { searchPokemons, actualPage, searchParameter, wipeSearch } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchIcon from '../../images/search-icon.svg'

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSearchHandler = (e) => {
    e.preventDefault();
    dispatch(searchPokemons(name));
    dispatch(searchParameter(name));
    dispatch(actualPage(1 , "/search") );
    navigate('/search')
    if(!e.target.value) {
        dispatch(wipeSearch())
    }
  };
  const inputValue = ({ target }) => {
    setName(target.value);
  };

  return (
      <form className={style.formContainer} onSubmit={onSearchHandler}>
        <img onClick={onSearchHandler} src={searchIcon} className={style.button}/>
        <input
          type="buscar pokemon"
          value={name}
          onChange={inputValue}
          name="onSearch"
        />
      </form>
  );
}
