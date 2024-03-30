import React from 'react'
import Form from '../Components/Form'
import { Navbar } from '../Components/Navbar'
import { useDentistStates } from '../Components/utils/global.context'
import './Contact.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useDentistStates()
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  return (
    <div className={themeClass}>
      <Navbar/>
      <h1 className={themeClass}>Contacto</h1>
      <div className={`contact ${themeClass}`}>
        <div className={`contact__text ${themeClass}`}>
          <h2 className={themeClass}>Want to know more?</h2>
          <p className={themeClass}>Send us your questions and we will contact you</p>
        </div>
        <Form/>
      </div>
    </div>
  );
}

export default Contact