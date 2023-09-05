import { Link } from 'react-router-dom'
import style from './Landing.module.css'

export default function Landing(){
    //Anidar el login, botones que redirigen a la home
    return(
        <div className={style.landingContainer}>
            <h1 className={style.title}>WELCOME TO POKEAPP</h1>
            <Link to="/home"><button className={style.button}>HOME PAGE</button></Link>
           
        </div>
    )
}