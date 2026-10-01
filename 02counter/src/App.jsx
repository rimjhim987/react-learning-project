import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
  //let counter = 15

  const addValue = ()=> {
    //counter += 1
    if (counter == 20){
      return
    }
    else{
    setCounter(counter + 1)
    console.log("Clicked" , counter);
    }
  }
  const removeValue = ()=> {
      if (counter == 0){
        return 
      }
      else{
        setCounter(counter-1);
      }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
