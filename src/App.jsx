import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import axios, { all } from "axios";
import onSVG from '/icons/on.svg'; //moved icons folder to public folder
import offSVG from '/icons/off.svg';

function App() {

  const [isOff, setOff] = useState(false);

  // const handleClick = () => {
  //   alert("Image clicked!");
  //<img src={onSVG} alt="On SVG" onClick={handleClick}/>
  //};

  return (
    <>
    {/* if off then off, else true 
    onclick, make isoff false if true and vise versa*/}
      <img src={isOff ? offSVG : onSVG} 
      alt="On Off Image" 
      onClick={() => setOff(!isOff)}/>
    </>
  )
}

export default App
