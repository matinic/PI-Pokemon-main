import SearchBar from "../searchBar/SearchBar"
import FilterBar from "../filterBar/FilterBar"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.css"
import {useState} from "react"

export default function Nav({setSearch, search}){

    const { pathname } = useLocation()


    return(

        <>
            <div className={style.navContainer}>
                <div className={style.title}>POKEMON PI</div>
                
                <ul className={style.menu}>
                    { pathname !== '/home' ? <Link to="/home" ><li>HOME</li></Link> : null }
                    { pathname !== '/newpoke' ? <Link to="/newpoke" ><li>CREATE</li></Link> : null}
                </ul>
                <SearchBar setSearch={setSearch}/>
               
            </div>
               
            {   
                pathname === '/home'  ?
                    <FilterBar context = {search ? 'searchMode' : 'home'}/>              
                : null
            }
       
   

        </>
    )
}