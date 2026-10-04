import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let rimjhim = {
    lastName : "singh",
    age : "18",
  };
  let reem = [ 1,2,3,4];

  return (
      <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
        <Card username="Rimjhim" btnText="click me" />
        <Card username="Yuvi" btnText="click me" />
      </>
    )
}

export default App
