import {React, useState, useEffect} from 'react'
import { getDentistaById } from '../api/dentista'
import { useDentistStates } from '../Components/utils/global.context'
import { ThemeWrapper } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import './Detail.css';
import { Navbar } from '../Components/Navbar';
import Footer from '../Components/Footer'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const [dentistSelected, setDentistSelected] = useState({})
  const {state, dispatch} = useDentistStates()
  console.log( state )

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const getData = async()=>{
      let dentistData = await getDentistaById(id);
      setDentistSelected(dentistData);
      console.log(dentistSelected)
    }
    getData()

  }, [id]);
  const addFav = () => {
    dispatch( {type:"ADD_FAVORITES", payload: dentistSelected })
  }


  return (
    <>
      <Navbar/>
      <div className={`card__child ${themeClass}`}>
        <img src="../../public/images/doctor.jpg" alt="" />
        <h4 className={themeClass}>{dentistSelected.name} {dentistSelected.username}</h4>
        <p className={themeClass}>Email: {dentistSelected.email} </p>
        <p className={themeClass}>Telefono: {dentistSelected.phone}</p>
        <p className={themeClass}>Sitio Web: {dentistSelected.website} </p>
        { <button onClick={addFav} className={`favButton ${themeClass}`}>Destacar</button>}
        </div>
      <Footer className={themeClass}/>
    </>
  )
}

export default Detail