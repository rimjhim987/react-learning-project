import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  let rimjhim = {
    lastName : "singh",
    age : "18",
  };
  let reem = [ 1,2,3,4];

  return (
    <>
      <h1 className="bg-blue-500 text-black p-4 rounded-xl">
        tailwind test</h1>
        {<Card  channel ="John Doe"  /*someOject = {rimhjim} array = {reem}*/  />}
        <Card />
    </>
  ) 
}

export default App
