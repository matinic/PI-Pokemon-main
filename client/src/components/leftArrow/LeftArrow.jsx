import React from "react";
import style from "./LeftArrow.module.css"
import { useNavigate } from "react-router-dom";

export default function LeftArrow() {

  const navigate = useNavigate();

  return (
   
    <div className={style.arrowContainer} onClick={()=>navigate(-1)}>
      <div className={style.stick}></div>
      <div className={style.arrow}></div>
      <div className={style.arrow2}></div>
    </div>
      
  );
}
