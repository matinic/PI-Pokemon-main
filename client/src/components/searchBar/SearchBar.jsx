import { useState } from "react"
import { useNavigate } from "react-router-dom";
import style from './SearchBar.module.css'

export default function SearchBar(){
    
    const [name,setName] = useState('');
    const navigate = useNavigate();

    const onSearchHandler = (e)=>{
            e.preventDefault()
            if(name.length === 0){navigate(`/home`)}
            else{ navigate(`/detail/name/${name}`)}
        }
    const inputValue = ({target})=>{
        setName(target.value)
    } 
    
    return(
        <div>

        <form className={style.formContainer}>
            <input type="buscar pokemon" value={name} onChange={inputValue} name="onSearch"/>
            <button onClick={onSearchHandler} >buscar</button>
            
        </form>

        </div>
    )
}