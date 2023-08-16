import styles from "./NewPoke.module.css";
import PokeTypes from "../pokeTypes/PokeTypes";
import { useEffect, useState } from "react";
import { postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Validations from "./Validations";
import { useNavigate } from "react-router-dom";
import invalid from "../../images/IMAGEN_INVALIDA.jpg";
//import ValidationsName from './ValidationsName';

export default function NewPoke(params) {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const newPokemon = useSelector((state) => state.postedPokemon);
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    deffense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  useEffect(() => {
    setError(Validations({ ...form }));
  }, [form]);
  const navigate = useNavigate();
  const onChangeHandler = (ev) => {
    const { name, value } = ev.target;
    if (name.includes("type")) {
      switch (name) {
        case "type1":
          let newTypes1 = [...form.types];
          newTypes1[0] = value;
          setForm({
            ...form,
            types: newTypes1,
          });
          break;
        case "type2":
          let newTypes2 = [...form.types];
          newTypes2[1] = value;
          setForm({
            ...form,
            types: newTypes2,
          });
          break;
      }
    } else {
      let parsedValue = value;
      if (!isNaN(value)) {
        parsedValue = Number(value);
      }
      setForm({
        ...form,
        [name]: parsedValue,
      });
    }
    if (name !== "image") {
      if (!isNaN(value) && form[ev.target.name] !== form.weight) {
        if (value < 1) {
          setForm({ ...form, [name]: 0 });
        }
        if (value > 120) {
          setForm({ ...form, [name]: 121 });
        }
      } else if (!isNaN(value) && form[ev.target.name] === form.weight) {
        if (value < 1) {
          setForm({ ...form, [name]: 0 });
        }
        if (value > 999) { 
          setForm({ ...form, [name]: 1000 });
        }
      }
    }
    setError(Validations({ ...form }));
  };
  console.log(form);
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

  return (
    <div className={styles.bodyFormContainer}>
      <div className={styles.form}>
        <h1>CREA TU NUEVO POKEMON</h1>

        <div className={styles.nameContainer}>
          <div
            className={
              error.name ? styles.errorStatusInput : styles.correctStatusInput
            }
          >
            <h3>*Nombre</h3>
            <input onChange={onChangeHandler} name="name" type="text" />
          </div>
          <div className={styles.errorAncla}>
            <h5 className={styles.error}>{error.name}</h5>
          </div>
        </div>

        <div className={styles.formStatsContainer}>
          <div className={styles.statsColumnWidth}>
            <div>
              <div
                className={
                  error.hp ? styles.errorStatusInput : styles.correctStatusInput
                }
              >
                <h3 name="hp">*Vida </h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="hp"
                  value={form.hp}
                  className={styles.necessaryInputs}
                />
              </div>
              <div className={styles.errorAncla}>
                <h5 className={styles.error}>{error.hp}</h5>
              </div>
            </div>

            <div>
              <div
                className={
                  error.attack
                    ? styles.errorStatusInput
                    : styles.correctStatusInput
                }
              >
                <h3>*Ataque </h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="attack"
                  value={form.attack}
                />
              </div>
              <div className={styles.errorAncla}>
                <h5 className={styles.error}>{error.attack}</h5>
              </div>
            </div>

            <div>
              <div
                className={
                  error.deffense
                    ? styles.errorStatusInput
                    : styles.correctStatusInput
                }
              >
                <h3>*Defensa</h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="deffense"
                  value={form.deffense}
                />
              </div>
              <div className={styles.errorAncla}>
                <h5 className={styles.error}>{error.deffense}</h5>
              </div>
            </div>
          </div>

          <div className={styles.statsColumnWidth}>
            <div>
              <div className={styles.correctStatusInput}>
                <h3>Velocidad</h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="speed"
                  value={form.speed}
                />
              </div>
              <div className={styles.errorAncla}>
                <h5 className={styles.error}>{error.speed}</h5>
              </div>
            </div>

            <div>
              <div className={styles.correctStatusInput}>
                <h3>Altura</h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="height"
                  value={form.height}
                />
              </div>
              <div className={styles.errorAncla}></div>
            </div>

            <div>
              <div className={styles.correctStatusInput}>
                <h3>Peso</h3>
                <input
                  type="number"
                  onChange={onChangeHandler}
                  name="weight"
                  value={form.weight}
                />
              </div>
              <div className={styles.errorAncla}></div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={
              error.types ? styles.errorStatusInput : styles.correctStatusInput
            }
          >
            <div className={styles.formTypes}>
              <PokeTypes id="1" onChange={onChangeHandler} disabled={false} />
              <PokeTypes id="2" onChange={onChangeHandler} disabled={false} />
            </div>
          </div>
          <div className={styles.errorAncla}>
            <h5 className={styles.error}>{error.types}</h5>
          </div>
        </div>

        <div>
          <div
            className={
              error.image ? styles.errorStatusInput : styles.correctStatusInput
            }
          >
            {form.image ? (
              <img
                onError={(ev) => {
                  ev.target.src = invalid;
                  setError({ ...error, image: "imagen invalida" });
                }}
                src={form.image}
                className={styles.viewImage}
              />
            ) : (
              <div className={styles.previewImage}>
                <h5>IMAGEN PREVIEW</h5>
              </div>
            )}
            <button onClick={handlerPaste}>Pegar Link</button>
            <input
              onChange={onChangeHandler}
              name="image"
              type="text"
              value={form.image}
            />
          </div>
        </div>

        <button
          onClick={postPokemonHnadler}
          disabled={Object.keys(error).length >= 4}
          className={styles.submitButton}
        >
          CREAR
        </button>
      </div>
    </div>
  );
}
