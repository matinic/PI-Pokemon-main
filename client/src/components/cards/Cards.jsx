import { useNavigate } from 'react-router-dom'
import style from './Cards.module.css'

export default function Card({id,name,image,types}){
    
    const navigate = useNavigate()
    const detailHandler = ()=>{
        navigate(`/detail/${id}`)
    }

    return(
        <div className={style.card} onClick={detailHandler}>     
            <h1 >{name}</h1>
            <img src={image} alt="" />
            <h4>{types?.map(type => ' ' + type + ' ')}</h4>
        </div>
    )
}