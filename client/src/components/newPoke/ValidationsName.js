import axios from 'axios'

export default async function ValidationsName(input){
    const error = {};
    try{
        const res = await axios.get(`http://localhost:3001/pokemons/name?name=${input}`)
        error.name = "El nombre ya existe"
        return error
    }catch(err){
        return error
    }
    
}