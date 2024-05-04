import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDentistStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Favs = () => {
  const { state } = useDentistStates();
  const { favs } = state;
  console.log(favs);
  const themeClass = state.theme === "dark" ? "dark" : "light";

  return (
    <>
      <Navbar />
      <h1 className={themeClass}>Dentistas Favoritos</h1>
      <div className={`card-grid ${themeClass}`}>
        {favs.map((dentista) => (
          <div className={`card__child ${themeClass}`} key={dentista.id}>
            <img src="../../public/images/doctor.jpg" alt="imagen de doctor" />
            <h4 className="">{dentista.name} {dentista.username}</h4>
            <p className={themeClass}>ID: {dentista.id}</p>
            <Link to={`/Detail/${dentista.id}`} className={themeClass}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
