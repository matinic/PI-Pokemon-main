import { Link } from 'react-router-dom'

export default function Landing(){
    //Anidar el login, botones que redirigen a la home
    return(
        <div>
            <h1>Bienvenidos a la APP de pokemon</h1>
            <Link to="/home"><button>HOME</button></Link>
           
        </div>
    )
}