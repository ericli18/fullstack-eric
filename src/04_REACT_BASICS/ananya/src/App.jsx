import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function checkEven()
{
  let num = 3
  
  if (num%2 == 0)
  {
    return "Even"
  }
  else
  {
    return "False"
  }
}

function idk({activity})
{
  
}

function App() {
  let first_name = "Ananya"
  let last_name = "Pal"
  let evenOdd = checkEven()

  

  return (
    <div>
      <h1>{first_name} {last_name}</h1>
      
      <h2>evenOdd</h2>

      
    

    </div>

  )
  
}

export default App
