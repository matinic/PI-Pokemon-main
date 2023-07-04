import { ACTUAL_PAGE, ACTUAL_RENDER, ERROR, GET_ALL_POKEMONS_TYPES, GET_POKEMONS, GET_POKEMONS_DB, GET_POKEMON_BY_TYPE, GET_POKEMON_ID, GET_POKEMON_NAME, ORDER_AZ, ORDER_LESSPW, ORDER_MOSTPW, ORDER_ZA, POST_POKEMON, SELECTED_OP, WIPE_ERROR } from "./types";

const initialState = {
    allPokemons: [],
    allPokemonsDb: [],
    allPokemonsReserve: [],
    allPokemonsDbReserve: [],
    actual: '',
    selectedOptions:{},
    pokemon:{},
    pokemonByName: {},
    postedPokemon: {},
    actualPage: 1,
    error: '',
}

export default function reducer(state=initialState,{type,payload}){
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                allPokemonsReserve: payload,
            }
        case GET_POKEMONS_DB:
            return {
                ...state,
                allPokemonsDb: payload,
                allPokemonsDbReserve: payload,
            }
        case ACTUAL_RENDER:
            return{
                ...state,
                actual: payload,
            }
        case GET_POKEMON_ID:
            return {
                ...state,
                pokemon: payload,
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemonByName: payload,
            }
        case GET_POKEMON_BY_TYPE: 
            return{
                ...state,
                allPokemons: [...state.allPokemonsReserve].filter(poke => poke.types.includes(payload)),
                allPokemonsDb: [...state.allPokemonsDbReserve].filter(poke => poke.types.includes(payload))
            }
        case GET_ALL_POKEMONS_TYPES:
            return{
                ...state,
                allPokemons: [...state.allPokemonsReserve],
                allPokemonsDb: [...state.allPokemonsDbReserve],
            }
        case SELECTED_OP:
            return{
                ...state,
                selectedOptions: {...state.selectedOptions,[payload.name]:payload.value}
            }
        case ORDER_AZ:
            return{
                ...state,
                allPokemons: [...state.allPokemons].sort((a,b) => a.name.localeCompare(b.name)),
                allPokemonsDb: [...state.allPokemonsDb].sort((a,b) => a.name.localeCompare(b.name)),
            } 
        case ORDER_ZA:
            return{
                ...state,
                allPokemons: [...state.allPokemons].sort((a,b) => b.name.localeCompare(a.name)),
                allPokemonsDb: [...state.allPokemonsDb].sort((a,b) => b.name.localeCompare(a.name)),
            } 
        case ORDER_MOSTPW:
            return{
                ...state,
                allPokemons: [...state.allPokemons].sort((a,b) => b.attack - a.attack ),
                allPokemonsDb: [...state.allPokemonsDb].sort((a,b) => b.attack - a.attack ),
            } 
        case ORDER_LESSPW:
            return{
                ...state,
                allPokemons: [...state.allPokemons].sort((a,b) => a.attack - b.attack ),
                allPokemonsDb: [...state.allPokemonsDb].sort((a,b) => a.attack - b.attack ),
            } 
        case POST_POKEMON:
            return {
                ...state,
                postedPokemon: payload,
            }
        case ACTUAL_PAGE:
            return{
                ...state,
                actualPage: payload,
            }
        case ERROR:
            return {
                ...state,
                error: payload,
            }
        case WIPE_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state
    }
}