import { createContext, useContext, useEffect,useState ,useReducer } from "react";

export const DentistStates = createContext();

const dentistasFavs = JSON.parse(localStorage.getItem('favs'))

export const initialState = {
  favs: dentistasFavs || [], //
  cart: [],
  theme: "light",
};

export const dentistReducer = (state, action) => {

  switch (action.type) {
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_BY_ID":
      let newArr = state.favs.filter((product) => product.id !== action.payload)
      return { ...state, favs: newArr };
    case "REMOVE_ALL":
      return { ...state, favs: [] };
    case "CHANGE_MODE":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

  const DentistContext = ({ children }) => {
    //Estados globales
    const [state, dispatch] = useReducer(dentistReducer, initialState);

    //Aca van las funciones globales
    let data = { state, dispatch };

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return (
      <DentistStates.Provider value={data}>{children}</DentistStates.Provider>
    );
  };

  export default DentistContext;

  export const useDentistStates = () => useContext(DentistStates);

  export const ThemeWrapper = ({ children, theme }) => {
    const themeClass = theme === 'dark' ? 'dark' : 'light';
    return <div className={themeClass}>{children}</div>;
  };