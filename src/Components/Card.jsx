import { React ,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDentistas } from "../api/dentista";
import { useDentistStates } from "./utils/global.context";

const Card = ( {} )=> {

  const {state} = useDentistStates()
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  const [dentistas, setDentistas] = useState([])
  useEffect(() =>{
    const getData = async () =>{
      let dentistasData = await getDentistas();
      setDentistas(dentistasData)
      console.log(state)
    }; getData()
  },[]) 
  //Si retorno el JSX comentado abajo puedo retornar las cards en Favs.jsx pero mi home se rompe
  {/* < div className={`card__child ${themeClass}`} key={item.id}>
        <img src="../../public/images/doctor.jpg" alt="" />
        <h4 className={themeClass}>{item.name} {item.username}</h4>
        <p className={themeClass}>ID: {item.id}</p>
        <Link to={`/Detail/${item.id}`} className={themeClass}>Ver detalle</Link>
      </div> */}
     /*  <div className={`card__child ${themeClass}`} key={dentista.id}>
        <img src="../../public/images/doctor.jpg" alt="" />
        <h4 className={themeClass}>{dentista.name} {dentista.username}</h4>
        <p className={themeClass}>ID: {dentista.id}</p>
        <Link to={`/Detail/${dentista.id}`} className={themeClass}>Ver detalle</Link>
      </div> */
  return (
    <div className={`card ${themeClass}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {dentistas.map((dentista) => (
        <div className={`card__child ${themeClass}`} key={dentista.id}>
          <img src="../../public/images/doctor.jpg" alt="imagen de doctor" />
          <h4 className={""}>{dentista.name} {dentista.username}</h4>
          <p className={themeClass}>ID: {dentista.id}</p>
          <Link to={`/Detail/${dentista.id}`} className={themeClass}>Ver detalle</Link>
      </div>
      ))}
    </div>
  );

      }

export default Card;