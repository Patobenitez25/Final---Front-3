import React from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react';
import  axios from 'axios';
import { Navbar } from '../Components/Navbar';
import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  return (
    <div className="" >
      <main>

        <Navbar/>
      <h1>Home</h1>
        {/* Aqui deberias renderizar las cards */}
        <Card/>
      
      </main>
      <Footer/>
    </div>
  )
}

export default Home