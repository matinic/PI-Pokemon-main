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
    '/home':[],
    '/search':[]
  },
  render:{
    '/home':[],
    '/search':[]
  },
  filterOptions: {
    '/home': {
      origin: "all",
      type: "all",
      sort: ""
    },
    '/search': {
      origin: "all",
      type: "all",
      sort: "",
    },
  },
  pokemonDetail:{},
  postedPokemon: {},
  actualPage: {
    '/home': 1,
    '/search': 1,
  },
  error: "",
  types: ["all"],
  searchWord: "",
};

export default function reducer(state = initialState, { type, payload }) {

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        original: {...state.original,'/home': payload},
        render: {...state.render,'/home': payload}
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        pokemonDetail: payload,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        original: {...state.original, '/search': payload},
        render: {...state.render, '/search': payload}
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
        searchWord: payload,
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
