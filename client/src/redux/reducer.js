import { actualPage } from "./actions";
import { ACTUAL_PAGE, ACTUAL_RENDER, ERROR, GET_ALL_POKEMONS_TYPES, GET_POKEMONS, GET_POKEMONS_DB, GET_POKEMON_BY_TYPE, GET_POKEMON_ID, GET_POKEMON_NAME, GET_TYPES, ORDER_AZ, ORDER_LESSPW, ORDER_MOSTPW, ORDER_ZA, POKEMONS_AMOUNT, POST_POKEMON, SEARCH_PARAMETER, SELECTED_OP, WIPE_ERROR, WIPE_POKEMON } from "./types";
const uuid = require('uuid')

const initialState = {
    allPokemons: [],
    allPokemonsDb: [],
    allPokemonsReserve: [],
    allPokemonsDbReserve: [],
    actual: '',
    selectedOptions:{},
    pokemon:{},
    pokemonByName: '',
    postedPokemon: {},
    actualPage: {
        home: 1,
        searchBar: 1,
    },
    error: '',
    types: ['all'],
    parameter: '',
}

export default function reducer(state=initialState,{type,payload}){
    switch(type){
        case GET_POKEMONS:
            const fromAPI = payload.filter(pokemon => !uuid.validate(pokemon.id))
            const fromDb = payload.filter(pokemon => uuid.validate(pokemon.id))
            return {
                ...state,
                allPokemons: fromAPI,
                allPokemonsReserve: fromAPI,
                allPokemonsDb: fromDb,
                allPokemonsDbReserve: fromDb,
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
            const {father,value} = payload
            return{
                ...state,
                actualPage: {...state.actualPage, [father]:value},
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
        case GET_TYPES:
            return{
                ...state,
                types: [...state.types,...payload]
            }
        case WIPE_POKEMON:
            return{
                ...state,
                pokemon: payload,
            }
        case SEARCH_PARAMETER:
            return{
                ...state,
                parameter: payload
            }
        default:
            return state
    }
}


