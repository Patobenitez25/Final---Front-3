import React from 'react'
import { Link } from 'react-router-dom';
import { useDentistStates } from "./utils/global.context";
import '../Components/Navbar.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const Navbar = () => {
const { state, dispatch } = useDentistStates()
console.log(state.theme)

return (
  <div className={state.theme ? "containerNavbar-dark" : "containerNavbar-light"}>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/Favs">Favorites</Link>
      <Link to="/Contact">Contacto</Link>
    </ul>
    <button onClick={()=> dispatch( {type: "CHANGE_MODE"} ) }>Cambiar modo</button>
    <h3>El modo esta en { state.theme ? "dark" : "light" }</h3>
  </div>
);
}