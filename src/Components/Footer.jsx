import React from 'react'
import { useDentistStates } from './utils/global.context';

const Footer = () => {
  const {state} = useDentistStates()
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  const darkImage = "../../public/images/DH2.png"
  const lightImage = "../../public/images/DH.png";
  const imageSource = state.theme === 'dark' ? darkImage : lightImage;

  return (
    <footer className={themeClass}>
        <p className={themeClass}>Powered by</p>
        <img src={imageSource}/>
    </footer>
  )
}

export default Footer
