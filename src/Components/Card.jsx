import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDentistas, getDentistaById } from "../api/dentista";
import Favs from "../Routes/Favs";
import { useDentistStates } from "./utils/global.context";




const Card = ({id}, Favs) => {

  const [dentistas, setDentistas] = useState([])
  const {state} = useDentistStates()
  console.log(state)

  useEffect(() =>{
    const getData = async () =>{
      let dentistasData = await getDentistas();
      setDentistas(dentistasData)
    }
    getData()
  },[])

  return (
      <div className="card">
          <Link to={`/Detail/${id}`}>
            
          {/* En cada card deberan mostrar en name - username y el id */}
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          {dentistas.map((dentista) => 
          <div className="card__child" key={dentista.id}>
            <img src="../../public/images/doctor.jpg" alt="" />
            <h4>{dentista.name} {dentista.username}</h4>
            <p>ID: {dentista.id}</p>
          </div>
          )}
          </Link>
      </div>
  )

      }

export default Card;