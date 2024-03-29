import React from "react";
import Card from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { useDentistStates } from "../Components/utils/global.context";
import Footer from "../Components/Footer"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatch} = useDentistStates();

  return (
    <>
      <Navbar/>
      <h1>Dentistas Favs</h1>
      <div className="card">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista) => {
        <div key={dentista.id}>
          
        </div>
        })}
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
