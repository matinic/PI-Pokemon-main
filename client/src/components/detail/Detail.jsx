import style from './Detail.module.css'
export default function Detail({card}){
    return(
        <div className={style.container}>  
            <div className={style.cardContainer}>
                <h1 className={style.name}>{card.name?.toUpperCase()}</h1>

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