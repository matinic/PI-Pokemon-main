import { useEffect } from "react"
import { useParams } from "react-router-dom"
import style from './DetailByName.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getPokemonByName, wipeError } from "../../redux/actions"

export default function DetailByName(){

    const {name} = useParams()
    const dispatch = useDispatch()
    const {pokemonByName,error} = useSelector(state => state)
    useEffect(()=>{
            dispatch(getPokemonByName(name))
            dispatch(wipeError())    
        }
        ,[name,dispatch])
    const card = pokemonByName;

    return(

        <div>
        <h1>Detail Page</h1>
        {
        (!error) ?
        <div className={style.card}>            
            <h1 >{card.name}</h1>
            <img src={card.image} alt="" />
            <h4>HP: {card.hp}</h4>
            <h4>ATTACK: {card.attack}</h4>
            <h4>DEFFENSE: {card.deffense}</h4>
            <h4>SPEED: {card.speed}</h4>
            <h4>HEIGHT: {card.height}</h4>
            <h4>WEIGHT: {card.weight}</h4>
            <h4>TYPES: {card.types?.map(type => type + ', ')}</h4>
        </div>
        : <h2>Pokemon No Encontrado</h2>
        }

        </div>
    )
}