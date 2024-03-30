import React from 'react';
import { Link } from 'react-router-dom';
import { useDentistStates} from './utils/global.context';
import { ThemeWrapper } from './utils/global.context';
import '../Components/Navbar.css';

export const Navbar = () => {
  const { state, dispatch } = useDentistStates();

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  // Manejar cambio de tema
  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_MODE" });
  };

  return (
    <ThemeWrapper theme={state.theme}>
      <div className={`containerNavbar ${themeClass}`}>
        <ul className={`containerNavbar__list ${themeClass}`}>
          <Link to="/" className={themeClass}>Home</Link>
          <Link to="/Favs" className={themeClass}>Favoritos</Link>
          <Link to="/Contact" className={themeClass}>Contacto</Link>
        </ul>
        <div className={`containerNavbar__div ${themeClass}`}>
          <button className='navBar-button' onClick={handleThemeChange}>Cambiar modo</button>
          <h3>El modo está en {state.theme}</h3>
        </div>
      </div>
    </ThemeWrapper>
  );
};
