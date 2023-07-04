
export default function PokeTypes({onChange, id}){
 
    return(
    <select onChange={onChange} name={`type${id}`}>
        <option value="" >-----</option>
        <option value="normal" >Normal</option>
        <option value="fighting">Lucha</option>
        <option value="flying" >Volador</option>
        <option value="poison">Veneno</option>
        <option value="ground">Tierra</option>
        <option value="rock" >Roca</option>
        <option value="bug" >Bicho</option>
        <option value="ghost" >Fantasma</option>
        <option value="steel">Acero</option>
        <option value="fire" >Fuego</option>
        <option value="water" >Agua</option>
        <option value="grass" >Planta</option>
        <option value="electric" >Electrico</option>
        <option value="psychic" >Psiquico</option>
        <option value="ice" >Hielo</option>
        <option value="dragon" >Dragon</option>
        <option value="dark" >Oscuro</option>
        <option value="fairy" >Hada</option>
        <option value="unknown" >Desconocido</option>
        <option value="shadow">Sombra</option>
    </select>
    )
}