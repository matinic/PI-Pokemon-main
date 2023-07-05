import { useEffect, useState } from "react";
import Card from "../cards/Cards";
import style from "./CardsPages.module.css"
import { actualPage, amountPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CardsPages({allCards}){
    
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.actualPage)
    const {
        allPokemons,
        allPokemonsDb,
        actual,
        } = allCards;

    let cards;
    switch (actual){
        case 'API':
            cards = [...allPokemons];
        break
        case 'DB':
            cards = [...allPokemonsDb]
        break
        default: 
            cards = [...allPokemons];
    }
    
    const paginator = ()=>{
        let pages = {};
        let limitPerPage = 12; 
        let j = 1; 
        while(cards.length){ 
                pages[`pag${j}`] = []
                for(let i = 0; i < limitPerPage; i++){
                    if(!cards.length) break
                    pages[`pag${j}`].push(cards.shift())
                }
                j++
            }
        return pages
    }
   
    const pages = paginator();
    const pagesKeys = Object.keys(pages)
    let actualPag = [];  
    
    for(let i = 0; i < pageNumber; i++){
            actualPag = pages[pagesKeys[i]]?.map(poke =>
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
        if(name === 'prev'){
            if(pageNumber > 1) dispatch(actualPage(pageNumber - 1))
        }
        else if(name === 'next'){
            if(pageNumber < pagesKeys.length) dispatch(actualPage(pageNumber + 1))
        }else if(name === 'actual'){
            dispatch(actualPage(Number(value)))
        }  
    }
  
    return(
        <div>
            <div className={style.buttonPagesContainer}>
            <button className={style.prev} name='prev' onClick={actualPageHandler}>prev</button>

                {   
                    pagesKeys ? pagesKeys.map((pag, index) => <button
                    name='actual'
                    value={index+1}
                    onClick={actualPageHandler}
                    key={index}
                    className={ pageNumber === index+1 ? style.actualPageNumberButton : null}>
                        {index+1}
                    </button >):null
                }

            <button className={style.next} name='next' onClick={actualPageHandler}>next</button>
            </div>
       
            <div className={style.cardsContainer}>
            {
                actualPag
            }
            </div>
        </div>
       
    )
}