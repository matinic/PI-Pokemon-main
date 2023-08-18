import { useDispatch, useSelector } from "react-redux"
import { actualRender, getAllPokemonsByType, getPokemonsByType, orderAZ, orderLessPw, orderMostPw, orderZA, selectedOp,actualPage } from "../../redux/actions"
import style from './FilterBar.module.css'
import { useEffect } from "react"
import { getTypes } from "../../redux/actions"

export default function FilterBar(){

    const dispatch = useDispatch()
    const {types} = useSelector(state => state)

    useEffect(()=>
       dispatch(getTypes())    
    ,[])


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
                <option value="DB">DATA BASE</option>
                <option value="ALL">ALL</option>
            </select>
            <label htmlFor="">FILTRAR POR TIPO </label>


            <select name="type"  onChange={handlerFilterOrigin} value={selectedOptions.type}>
                {
                   types?.map((type,index) => <option value={type} key={index}>{type}</option>)
                } 
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

