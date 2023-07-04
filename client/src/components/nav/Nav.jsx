import SearchBar from "../searchBar/SearchBar"
import FilterBar from "../filterBar/FilterBar"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav(){
    const { pathname } = useLocation()
    return(
        <div className={style.navContainer}>
            <div className={style.navButtons}>
                <Link to="/home"><button>Home</button></Link>
                <Link to="/newpoke"><button>Crear</button></Link>
            </div>
            {
            pathname !== '/newpoke'?
            <div className={style.searchContainer}>
                <SearchBar/>
                <FilterBar/>
            </div>
            :null
            }
            <div className={style.vacio}></div>
        </div>
    )
}