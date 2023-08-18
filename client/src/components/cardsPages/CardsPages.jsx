import Card from "../cards/Cards";
import style from "./CardsPages.module.css"
import leftArrow from "../../images/leftArrow.png";

import { actualPage, amountPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CardsPages({cards, page:pageNumber, father, onSearch, search}){
    
    const dispatch = useDispatch()
    const { parameter }= useSelector(state => state)

    const paginator = (card)=>{
        let pages = [];
        let limitPerPage = 12; 
        let j = 1 
        while(card.length){ 
            pages[j] = []
            for(let i = 0; i < limitPerPage; i++){
                if(!card.length) break
                pages[j].push(card.shift())
            }
            j++
        }
        return pages
    }
    const pages = paginator([...cards])

    let actualPag = [];
    for(let i = 1; i <= pageNumber; i++){
                actualPag = pages[i]?.map(poke =>
                        <Card 
                            key={poke?.id}
                            id={poke?.id}
                            name={poke?.name}
                            image={poke?.image}
                            hp={poke?.hp}
                            attack={poke?.attack}
                            deffense={poke?.deffense}
                            speed={poke?.speed}
                            height={poke?.height}
                            weight={poke?.weight}
                            types={poke?.types}
                        />            
                ) 
        } 
       
    const actualPageHandler = (e)=>{
        const {value,name} = e.target;
        //botones que controlan hacia atras y hacia adelante
        if(name === 'prev'){
            if(pageNumber > 1) dispatch(actualPage(pageNumber - 1,father))
        }
        else if(name === 'next'){
            if(pageNumber < pages.length) dispatch(actualPage(pageNumber + 1,father))
        //boton de numero pagina con valor unitario
        }else if(name === 'actual'){
            dispatch(actualPage(Number(value),father))
        }  
    }

   
    return(
        <div>
            <div className={style.buttonPagesContainer}>
            <button className={style.pageButtons} name='prev' onClick={actualPageHandler}>{'<<'}</button>

                {   
                    pages ? pages.map((pag, index) => <button
                    name='actual'
                    value={index}
                    onClick={actualPageHandler}
                    key={index}
                    className={ pageNumber === index ? style.actualPageNumberButton : style.pageButtons}>
                        {index}
                    </button >):null
                }

            <button className={style.pageButtons} name='next' onClick={actualPageHandler}>{'>>'}</button>
            </div>

            {
                search ?
                <div className={style.searchResultsContainer}>
                    <div className={style.returnBack}>
                        <img src={leftArrow} alt="" className={style.arrow} onClick={()=> onSearch(false)}/>
                    </div>
                        <h3>Resultados de busqueda: {`"${parameter}"`} </h3>
                
                </div>
                : null
            }
            
            <div className={style.allPagesContainer}>
                <div className={style.pageContainer}>
                {
                    actualPag
                }
                </div>
            </div>
        </div>
       
    )
}