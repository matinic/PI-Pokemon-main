import styles from "./NewPoke.module.css";
import { useEffect, useState } from "react";
import { postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Validations from "./Validations";
import { useNavigate } from "react-router-dom";
import paste from "./../../images/paste.png"
import noimage from "./../../images/no-image.jpg"
import { getTypes } from "../../redux/actions";
import LeftArrow from "../leftArrow/LeftArrow";
//import ValidationsName from './ValidationsName';

export default function NewPoke() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { types, postedPokemon } = useSelector((state) => state);
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: 1,
    attack: 1,
    deffense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    types: [],
  });

  useEffect(() => {
    setError(Validations(form))
    if(types.length < 2) dispatch(getTypes())
    if(postedPokemon.id) navigate(`/detail/${postedPokemon.id}`)
  }, [form,postedPokemon]);

  const statsName = ["hp", "attack", "deffense", "speed", "height", "weight"];

  const formHandler = (ev) => {
    let { name, value, checked } = ev.target;
    if (name === "types") {
      if(checked){
        setForm({
          ...form,
          types: [...form.types, value],
        });
      }else{
        let typesCopy = [...form.types]
        typesCopy.splice(form.types.indexOf(value),1)
        setForm({
          ...form,
          types: typesCopy
        })
      }
    }
    if ( statsName.includes(name) && value ) {
      value = parseInt(value)
      setForm({
        ...form,
        [name]: value,
      });
    } else if (name !== 'types'){
      setForm({
        ...form,
        [name]: value,
      });
    }
    if(name === 'image'){
      setForm({
        ...form,
        image: value
      })
    }
  };

  const postPokemonHnadler = (ev) => {
    ev.preventDefault();
    dispatch(postPokemon(form));
    alert("pokemon creado");
  };
const handlerPaste = async () => {
    const textCopied = await navigator.clipboard.readText();
    setForm({
      ...form,
      image: textCopied,
    });
  };

//inputs de estadisticas
const stats = statsName.map((stats) => (
    <div name='stat' key={stats}>
      <h4 name="hp">{stats.toUpperCase()}</h4>
      <input
        type="number"
        onChange={formHandler}
        name={stats}
        value={form[stats]}
        min="1"
        error={Boolean(error[stats]).toString()}
      />
      <h5
        className={styles.errorMessage} 
        viewerror={ Boolean(error[stats]).toString() }
      >{error[stats]}</h5>
    </div>
))

//inputs checkboxes
const checkBox = types.map((type, index) => (
    <label key={index} className={styles.checkBox}
      error = { Boolean(error.types && form.types.length < 1).toString() }
      error2  = { Boolean(error.types && form.types.includes(type)).toString() }
      correct = { Boolean(!error.types && form.types.includes(type)).toString() }
     >
      <input 
        type="checkbox" 
        name='types'
        value={type}
        onChange={formHandler}
      />
      <span className={styles.checkmark}></span>
      {type}
    </label>
))
checkBox.shift()

const buttonStyle = {
  backgroundImage: `url(${paste})`,
}

return (
  <div>
  <LeftArrow/>
        <form className={styles.form}>

        <div className={styles.nameContainer}>
            <h4>NAME</h4>
            <input
                type="text"
                onChange={formHandler}
                name='name'
                value={form.name}
                error={Boolean(error.name).toString()}
            />
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <h5 style={{marginRight: '10px'}} className={styles.errorMessage} viewerror={ Boolean(error.name).toString()}>{error.name}</h5>
              <h5 style={!error.name ? {color:'#F5EEA9'} : null} className={styles.errorMessage}>{form.name.length}</h5>
            </div>
        </div>

        <div className={styles.statsContainer}>
          {stats}
        </div>
          
        <div className={styles.typesContainer}>
          <h4>TYPES</h4>
          <div className={styles.checkboxContainer}>
            {checkBox}
          </div>
          <h5 className={styles.errorMessage} viewerror={ Boolean(error.types).toString() }>{error.types}</h5>
        </div>

        <div className={styles.imageContainer}>
          <h4>IMAGE</h4>
          
          <div className={styles.uploadInputContainer}>
            <span className={styles.button } style={ buttonStyle } tooltip='paste link' onClick={handlerPaste} name='image'></span>
            <input type="text" placeholder="paste link" value={form.image} onChange={formHandler} name="image"/>
          </div>

        </div>

        <button onClick={postPokemonHnadler} className={styles.submitButton} disabled={Boolean(Object.keys(error).length)}>
          CREATE
        </button>

      </form>
  </div>
  );
}
