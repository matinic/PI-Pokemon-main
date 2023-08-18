import SearchBar from "../searchBar/SearchBar"
import FilterBar from "../filterBar/FilterBar"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({onSearch}){
    const { pathname } = useLocation()
    return(
        <div className={style.navContainer}>
            <div className={style.navButtons}>
                <Link to="/"><button>Logout</button></Link>
                <Link to="/home"><button>Home</button></Link>
                <Link to="/newpoke"><button>Crear</button></Link>
            </div>
            {
            pathname !== '/newpoke'?
            <div className={style.searchContainer}>
                <SearchBar onSearch={onSearch}/>
                <FilterBar/>
            </div>
            :null
            }
            <div className={style.vacio}></div>
        </div>
    )
}