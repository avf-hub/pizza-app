import { useState, type MouseEvent } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
  setCounter(e.target.value + 1);
};

  return (
    <>
      <Button onClick={addCounter} >Копка {counter}</Button>
    </>
  )
}

export default App
