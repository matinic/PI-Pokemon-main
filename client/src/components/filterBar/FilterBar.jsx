import { useDispatch, useSelector } from "react-redux"
import { actualRender, getAllPokemonsByType, getPokemonsByType, orderAZ, orderLessPw, orderMostPw, orderZA, selectedOp,actualPage } from "../../redux/actions"
import style from './FilterBar.module.css'

export default function FilterBar(){

    const dispatch = useDispatch()

    const {selectedOptions} = useSelector(state => state)

    const handlerFilterOrigin = (ev)=>{
        const {value,name} = ev.target
        if(name === 'origen' ){
            if(value === 'API'){
                dispatch(actualRender(value))
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            }else if(value === 'DB'){
                dispatch(actualRender(value))
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            }   
        }else if(name === 'type'){
            if(value === 'all'){
                dispatch(getAllPokemonsByType())
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            }else{
                dispatch(getPokemonsByType(value))
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            }
        }
        dispatch(actualPage(1))
    }
    const handlerOrder = (ev)=>{
        const {value,name} = ev.target
        switch (value){
            case 'AZ':
                dispatch(orderAZ())
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            break
            case 'ZA':
                dispatch(orderZA())
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            break
            case 'MostPW':
                dispatch(orderMostPw())
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            break
            case 'LessPW':
                dispatch(orderLessPw())
                dispatch(selectedOp(name,value))//guarda la configuracion actual
            break
        }
    }
    return(
        <div className={style.filterContainer}>
            <label htmlFor="">FILTRAR ORIGEN</label>

            <select name="origen" onChange={handlerFilterOrigin} value={selectedOptions.origen}>
                <option value="API">API</option>
                <option value="DB">Base de Datos</option>
            </select>
            <label htmlFor="">FILTRAR POR TIPO </label>

            <select name="type"  onChange={handlerFilterOrigin} value={selectedOptions.type}>
                <option value="all" >All</option>
                <option value="normal" >normal</option>
                <option value="fighting">fighting</option>
                <option value="flying" >flying</option>
                <option value="poison">poison</option>
                <option value="ground">ground</option>
                <option value="rock" >rock</option>
                <option value="bug" >bug</option>
                <option value="ghost" >ghost</option>
                <option value="steel">steel</option>
                <option value="fire" >fire</option>
                <option value="water" >water</option>
                <option value="grass" >grass</option>
                <option value="electric" >electric</option>
                <option value="psychic" >psychic</option>
                <option value="ice" >ice</option>
                <option value="dragon" >dragon</option>
                <option value="dark" >dark</option>
                <option value="fairy" >fairy</option>
                <option value="unknown" >unknown</option>
                <option value="shadow">shadow</option>
            </select>
            <label htmlFor="">ORDENAR</label>

            <select name="alphabetical" onChange={handlerOrder} value={selectedOptions.alphabetical}>
                <option disable="true">Alfabetico</option>
                <option value="AZ">A - Z</option>
                <option value="ZA">Z - A</option>
            </select>

            <select name="attack" onChange={handlerOrder} value={selectedOptions.attack}>
                <option disable="true">Power Attack</option>
                <option value="MostPW">Most PW</option>
                <option value="LessPW">Less PW</option>
            </select>
            
        </div>
    )
}

