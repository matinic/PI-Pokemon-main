import SearchBar from "../searchBar/SearchBar"
import FilterBar from "../filterBar/FilterBar"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({setSearch, search}){

    const { pathname } = useLocation()

    return(

            <div className={style.navContainer}>
                
                <div className={style.title}>

                    <ul className={style.menu}>
                        { pathname !== '/home' ? <Link to="/home" ><li>HOME</li></Link> : null }
                        { pathname !== '/newpoke' ? <Link to="/newpoke" ><li>CREATE</li></Link> : null }
                    </ul>
                    <h1>POKEMONAPP</h1>
                    {pathname === '/newpoke' ? <h2>CREATE A POKEMON</h2> : null}

                </div>

                { pathname === '/home' || pathname === '/search' ? <FilterBar context = {pathname}/> : null }
                
                <SearchBar setSearch={setSearch}/>
               
            </div>       
    )
}