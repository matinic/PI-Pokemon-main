import styles from './Home.module.css'
import CardsPages from '../cardsPages/CardsPages'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons, getPokemonsDb } from '../../redux/actions';


export default function Home(){
    
    const {allPokemons, allPokemonsDb, actual} = useSelector((state)=> state)
    const dispatch = useDispatch()
    useEffect(()=>{
            //Con la condicion se evita pedidos asincronos innecesarios
            if(!Object.keys(allPokemons).length) dispatch(getPokemons()) 
            if(!Object.keys(allPokemonsDb).length) dispatch(getPokemonsDb())
        }
    ,[])
   
    return(
        <div>
         
            <div className={styles.CardsContainer}>
            
            {
                allPokemons.length  || allPokemonsDb.length ?
                <CardsPages  allCards = {{allPokemons,allPokemonsDb,actual}}
                />:null
            }           

            </div>
        </div>
    )
}