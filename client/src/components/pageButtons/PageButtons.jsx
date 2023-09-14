import { actualPage } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from './PageButtons.module.css'


export default function PageButtons({pages, father, pageNumber}) {

    const dispatch = useDispatch();

    const actualPageHandler = (e) => {
        const { value, name } = e.target;
        //botones que controlan hacia atras y hacia adelante
        if (name === "prev") {
          if (pageNumber > 1) dispatch(actualPage(pageNumber - 1, father));
        } else if (name === "next") {
          if (pageNumber < pages.length-1) dispatch(actualPage(pageNumber + 1, father));
          //boton de numero pagina con valor unitario
        } else if (name === "actual") {
          dispatch(actualPage(Number(value), father));
        }
      };

  return (
    <div className={style.buttonPagesContainer}>
    <button
      className={style.pageButtons}
      name="prev"
      onClick={actualPageHandler}
    >
      {"<<"}
    </button>

    {
      pages.map((pag, index) => (
          <button
            name="actual"
            value={index}
            onClick={actualPageHandler}
            key={index}
            className={
              pageNumber === index
                ? style.actualPageNumberButton
                : style.pageButtons
            }
          >
            {index}
          </button>
      ))
    }

    <button
      className={style.pageButtons}
      name="next"
      onClick={actualPageHandler}
    >
      {">>"}
    </button>
  </div>
  )
}
