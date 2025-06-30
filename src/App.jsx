import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian/Accordian'
import RandomColor from './components/ColorGenerator'
import StarRating from './components/StarRating'
import LightDarkMode from './components/LocalStorage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Light/Dark Theme and Local Storage Custom Hook */}
      <LightDarkMode />
    </>
  );
}

export default App
