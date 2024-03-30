import React from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react';
import  axios from 'axios';
import { Navbar } from '../Components/Navbar';
import Footer from '../Components/Footer'
import { useDentistStates, ThemeWrapper } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  
  const {state} = useDentistStates()
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={themeClass} >
      <main className={themeClass}>

        <Navbar/>
      <h1 className={themeClass}>Home</h1>
        {/* Aqui deberias renderizar las cards */}
        <Card/>
      
      </main>
      <Footer/>
    </div>
  )
}

export default Home