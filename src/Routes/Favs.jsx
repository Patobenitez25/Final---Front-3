import React from "react";
import Card from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { useDentistStates } from "../Components/utils/global.context";
import Footer from "../Components/Footer"
import Detail from "./Detail";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useDentistStates()
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  
  //hola profe. En este caso tuve un problema particular que no fui capaz de resolver,
  // por cada objeto dentista que guarde en mi localStorage,el componente Favs renderiza 10.
  // si usted es capaz de arreglarlo y dejarme un comentario respecto al problema 
  //o si podemos hacerlo en clase se lo agradeceria

  return (
    <>
      <Navbar/>
      <h1 className={ themeClass}>Dentistas Favoritos</h1>
      <div className={`card ${themeClass}`}>
        
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentist) => {
          return <Card key={dentist.id} dentist={dentist}/>
        })}
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
