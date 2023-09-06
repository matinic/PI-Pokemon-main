import {
  ACTUAL_PAGE,
  ERROR,
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  POST_POKEMON,
  SEARCH_PARAMETER,
  SEARCH_POKEMONS,
  SELECTED_OP,
  WIPE_ERROR,
  WIPE_POKEMON,
  WIPE_SEARCH,
  FILTER,
} from "./types";

const initialState = {
  original:{
    home:[],
    searchMode:[]
  },
  render:{
    home:[],
    searchMode:[]
  },
  filterOptions: {
    home: {
      origin: "all",
      type: "all",
      alphabetical: "",
      attack: "",
    },
    searchMode: {
      origin: "all",
      type: "all",
      alphabetical: "",
      attack: "",
    },
  },
  pokemonDetail:{},
  postedPokemon: {},
  actualPage: {
    home: 1,
    searchMode: 1,
  },
  error: "",
  types: ["all"],
  parameter: "",
};

export default function reducer(state = initialState, { type, payload }) {

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        original: {...state.original,home: payload},
        render: {...state.render,home: payload}
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        pokemonDetail: payload,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        original: {...state.original, searchMode: payload},
        render: {...state.render, searchMode: payload}
      };
    case FILTER:
      return {
        ...state,
        render:{...state.render, [payload.context]: payload.value}
      };
    case SELECTED_OP:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          [payload.context]: {
            ...state.filterOptions[payload.context],
            [payload.filter]: payload.option,
          },                                                    
        },
      };
    case POST_POKEMON:
      return {
        ...state,
        postedPokemon: payload,
      };
    case ACTUAL_PAGE:
      return {
        ...state,
        actualPage: { ...state.actualPage, [payload.context]: payload.value },
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    case WIPE_ERROR:
      return {
        ...state,
        error: payload,
        postedPokemon: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: [...state.types, ...payload],
      };
    case WIPE_POKEMON:
      return {
        ...state,
        pokemonDetail: payload,
      };
    case SEARCH_PARAMETER:
      return {
        ...state,
        parameter: payload,
      };
    case WIPE_SEARCH:
      return {
        ...state,
        pokemonByName: payload,
      };

    default:
      return state;
  }
}
