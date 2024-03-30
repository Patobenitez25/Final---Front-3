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
      <h1 className={themeClass}>Dentists Favs</h1>
      <div className={`card-grid ${themeClass}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista) => {
          return <Card item={dentista} key={dentista.id} />;
        })}
      </div>
    </>
  );
};

export default Favs;
