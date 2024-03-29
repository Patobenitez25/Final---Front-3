import {React, useState, useEffect} from 'react'
import { getDentistaById } from '../api/dentista'
import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import './Detail.css'
import { Navbar } from '../Components/Navbar'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const [dentistSelected, setDentistSelected] = useState({})
  const {state, dispatch} = useDentistStates()
  console.log(state)

  useEffect(() => {
    const getData = async()=>{
      let dentistData = await getDentistaById(id);
      setDentistSelected(dentistData);
      console.log(dentistSelected)
    }
    getData()

  }, [id]);
  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: dentist });
    alert(dentist.name + " agregado a favoritos");
  }

  return (
    <div className="card__child">
      <Navbar/>
      <img src="../../public/images/doctor.jpg" alt="" />
            <h4>{dentistSelected.name} {dentistSelected.username}</h4>
            <p>Contacto: {dentistSelected.email} </p>
            <p>{dentistSelected.phone}</p>
            <p>{dentistSelected.website} </p>
            { <button onClick={addFav} className="favButton">Destacar</button>}
    </div>
  )
}

export default Detail