import React from "react";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import style from './ReturnBack.module.css'

export default function ReturnBack({forExecution, direction}) {
  return (
   
      <div className={style.returnBack} onClick={forExecution}>
        <img
          src={direction ? rightArrow : leftArrow} 
          alt=""
          className={style.arrow}
        />
      </div>
      
  );
}
