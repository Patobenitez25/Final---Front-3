import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDentistas, getDentistaById } from "../api/dentista";
import { useDentistStates } from "./utils/global.context";

const Card = ({dentist})=> {

  const {state} = useDentistStates()
  console.log(state)
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  const [dentistas, setDentistas] = useState([])

  useEffect(() =>{
    const getData = async () =>{
      let dentistasData = await getDentistas();
      setDentistas(dentistasData)
    }; getData()
  },[]) 
  

  return (
    <div className={`card ${themeClass}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {dentistas.map((dentista) => (
        <div className={`card__child ${themeClass}`} key={dentista.id}>
          <img src="../../public/images/doctor.jpg" alt="" />
          <h4 className={themeClass}>{dentista.name} {dentista.username}</h4>
          <p className={themeClass}>ID: {dentista.id}</p>
          <Link to={`/Detail/${dentista.id}`} className={themeClass}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );

      }

export default Card;