import SearchBar from "../searchBar/SearchBar"
import FilterBar from "../filterBar/FilterBar"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({setSearch, search}){
    const location = useLocation()
  
    return(
        <div className={style.navContainer}>
            <div className={style.navButtons}>
                <Link to="/"><button>Landing</button></Link>
                <Link to="/home"><button>Home</button></Link>
                <Link to="/newpoke"><button>Crear</button></Link>
            </div>
            {
            location.pathname !== '/newpoke'?
            <div className={style.searchContainer}>

                <SearchBar setSearch={setSearch}/>
                
                <FilterBar context = {search ? 'searchMode' : 'home'}/> 
                
               
            </div>
            :null
            }
            <div className={style.vacio}></div>
        </div>
    )
}