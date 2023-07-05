import { useNavigate } from 'react-router-dom'
import style from './Cards.module.css'

export default function Card({id,name,image,types}){
    
    const navigate = useNavigate()
    const detailHandler = ()=>{
        navigate(`/detail/${id}`)
    }

    return(
        <div className={style.card} onClick={detailHandler}>     
            <h2>{name?.toUpperCase()}</h2>
            <img src={image} alt="" />
            <div className={style.typeContainer}>{types?.map((type,index) => <h5 key={index} className={style.type}>{type?.toUpperCase()}</h5>)}</div> 
        </div>
    )
}