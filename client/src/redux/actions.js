import { ACTUAL_PAGE, ACTUAL_RENDER, ERROR, GET_ALL_POKEMONS_TYPES, GET_POKEMONS, GET_POKEMONS_DB, GET_POKEMON_BY_TYPE, GET_POKEMON_ID, GET_POKEMON_NAME, ORDER_AZ, ORDER_LESSPW, ORDER_MOSTPW, ORDER_ZA, POST_POKEMON, SELECTED_OP, WIPE_ERROR } from "./types";
import axios from 'axios'

export const getPokemons = ()=>{
    return async (dispatch)=>{
        try{
            const res = (await axios.get('http://localhost:3001/pokemons/')).data;
            return dispatch({
                type: GET_POKEMONS,
                payload: res['pokes'],
            })
        }catch(error){
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
} 
export const getPokemonsDb = ()=>{
    return async (dispatch)=>{
        try{
            const res = (await axios.get('http://localhost:3001/pokemons/')).data;
            return dispatch({
                type: GET_POKEMONS_DB,
                payload: res['pokesDb'],
            })
        }catch(error){
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
} 
export const getPokemonById = (id)=>{
    return async (dispatch)=>{
        try{
            const res = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
            return dispatch({
                type: GET_POKEMON_ID,
                payload: res
            })
        }catch(error){
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const getPokemonByName = (name)=>{
    return async (dispatch)=>{
        try{
            const res = (await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)).data;
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: res
            })
        }catch(error){
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const actualRender = (val)=>{
    return{
        type: ACTUAL_RENDER,
        payload: val,
    }
}
export const getPokemonsByType = (type)=>{
        return {
            type: GET_POKEMON_BY_TYPE,
            payload: type,
        }
}
export const getAllPokemonsByType = ()=>{
        return {
            type: GET_ALL_POKEMONS_TYPES,
            payload: null,
        }
}
export const selectedOp = (name,value)=>{
        return{
            type: SELECTED_OP,
            payload: {name,value},
        }
}

export const postPokemon = (body)=>{
    return async (dispatch)=>{
        try{
            const res = (await axios.post(`http://localhost:3001/pokemons/`,body)).data;
            return dispatch({
                type: POST_POKEMON,
                payload: res
            })
        }catch(error){
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const wipeError = ()=>{
    return {
        type: WIPE_ERROR,
        payload: null,
    }
}
export const orderLessPw = ()=>{
    return{
        type: ORDER_LESSPW,
        payload: null,
    }
}
export const orderMostPw = ()=>{
    return{
        type: ORDER_MOSTPW,
        payload: null,
    }
}
export const orderAZ = ()=>{
    return{
        type: ORDER_AZ,
        payload: null,
    }
}
export const orderZA = ()=>{
    return{
        type: ORDER_ZA,
        payload: null,
    }
}
export const actualPage = (value)=>{
    return{
        type: ACTUAL_PAGE,
        payload: value,
    }
}
