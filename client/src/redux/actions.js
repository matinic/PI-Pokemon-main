import {
  ACTUAL_PAGE,
  ACTUAL_RENDER,
  ERROR,
  FILTER,
  GET_ALL_POKEMONS_TYPES,
  GET_POKEMONS,
  GET_POKEMONS_DB,
  GET_POKEMON_BY_TYPE,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_TYPES,
  ORDER_AZ,
  ORDER_LESSPW,
  ORDER_MOSTPW,
  ORDER_ZA,
  POKEMONS_AMOUNT,
  POST_POKEMON,
  SEARCH_PARAMETER,
  SEARCH_POKEMONS,
  SELECTED_OP,
  WIPE_ERROR,
  WIPE_POKEMON,
  WIPE_SEARCH,
} from "./types";
import axios from "axios";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const res = (await axios.get("http://localhost:3001/pokemons/")).data;
      return dispatch({
        type: GET_POKEMONS,
        payload: res,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    try {
      const res = (await axios.get(`http://localhost:3001/pokemons/${id}`))
        .data;
      return dispatch({
        type: GET_POKEMON_ID,
        payload: res,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};
export const searchPokemons = (name) => {
  return async (dispatch) => {
    try {
      const res = (
        await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
      ).data;
      return dispatch({
        type: SEARCH_POKEMONS,
        payload: res,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};
export const getTypes = () => {
  return async (dispatch) => {
    try {
      const res = (await axios.get("http://localhost:3001/types")).data;
      return dispatch({
        type: GET_TYPES,
        payload: res,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const filterAction = (value,context) => {
  return {
    type: FILTER,
    payload: {value,context},
  };
};

export const postPokemon = (body) => {
  return async (dispatch) => {
    try {
      const res = (await axios.post(`http://localhost:3001/pokemons/`, body))
        .data;
      return dispatch({
        type: POST_POKEMON,
        payload: res,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};
export const wipeError = () => {
  return {
    type: WIPE_ERROR,
    payload: null,
  };
};
export const orderLessPw = () => {
  return {
    type: ORDER_LESSPW,
    payload: null,
  };
};
export const orderMostPw = () => {
  return {
    type: ORDER_MOSTPW,
    payload: null,
  };
};
export const orderAZ = () => {
  return {
    type: ORDER_AZ,
    payload: null,
  };
};
export const wipePokemon = () => {
  return {
    type: WIPE_POKEMON,
    payload: {},
  };
};
export const actualPage = (value, context) => {
  return {
    type: ACTUAL_PAGE,
    payload: {
      context,
      value,
    },
  };
};
export const searchParameter = (value) => {
  return {
    type: SEARCH_PARAMETER,
    payload: value,
  };
};
export const wipeSearch = () => {
  return {
    type: WIPE_SEARCH,
    payload: "",
  }
}
export const selectedOptions = (value)=>{
  return{
    type: SELECTED_OP,
    payload: value
  }
}
