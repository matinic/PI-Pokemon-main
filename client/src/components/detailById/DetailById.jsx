import { useEffect } from "react"
import { useParams } from "react-router-dom"
import style from './DetailById.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getPokemonById } from "../../redux/actions"
import Detail from "../detail/Detail"
export default function DetailById(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const card = useSelector(state => state.pokemon)
    useEffect(()=>{dispatch(
        getPokemonById(id))}
        ,[])
    
    return(
        <div>
            <Detail card={card}></Detail>

        </div>
    )
}