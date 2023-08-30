import style from './Detail.module.css'
import ReturnBack from "../returnBack/ReturnBack";
import { useNavigate } from 'react-router-dom';


export default function Detail({card}){

    const navigate = useNavigate()

    return(
        <div className={style.container}> 

            <div className={style.cardContainer}>
                <div className={style.name}>
                    <ReturnBack forExecution={() => navigate(-1)}/>
                    <h1>{card.name?.toUpperCase()}</h1>
                </div>

                <img src={card.image} alt="" />
                <div className={style.statsContainer}>

                    <div>
                        <h4>HP <div>{card.hp}</div></h4>
                        <h4>ATTACK <div>{card.attack}</div></h4>
                        <h4>DEFFENSE <div>{card.deffense}</div></h4>  
                    </div>
                    <div>
                        <h4>SPEED <div>{card.speed}</div></h4>
                        <h4>HEIGHT <div>{card.height}</div></h4>
                        <h4>WEIGH <div>{card.weight}</div></h4>
                    </div>
                    <div>
                        {card.types?.map((type,index) => (<h4 key={index}className={style.types}>{type.toUpperCase()}</h4>))}
                    </div>
                </div>
            </div>         
        </div>
    )
}