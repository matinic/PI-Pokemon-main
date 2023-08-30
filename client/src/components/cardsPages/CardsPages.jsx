import Card from "../cards/Cards";
import style from "./CardsPages.module.css";

export default function CardsPages({ pages, pageNumber }) {

  let actualPag = [];
  for (let i = 1; i <= pageNumber; i++) {
    actualPag = pages[i]?.map((poke) => (
      <Card
        key={poke?.id}
        id={poke?.id}
        name={poke?.name}
        image={poke?.image}
        hp={poke?.hp}
        attack={poke?.attack}
        deffense={poke?.deffense}
        speed={poke?.speed}
        height={poke?.height}
        weight={poke?.weight}
        types={poke?.types}
      />
    ));
  }

  return (
    <div>
      <div className={style.allPagesContainer}>
        <div className={style.pageContainer}>{actualPag}</div>
      </div>

    </div>
  );
}
