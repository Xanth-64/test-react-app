import {Botoncito} from './Components/Botoncito'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
function App() {
  const funcioncita = () => {
    console.log('Hola')
  }
  useEffect(funcioncita,[])
  const [numerito, setNumerito] = useState(1)
  return (
    <div>
      <h1> 5 multiplicado por 2 da {null} </h1>
      <Botoncito texto={numerito}/>
      <Button variant= 'warning' onClick = {() => {
        setNumerito(numerito + 1)
      }}>Incrementar</Button>
    </div>
  );
}

export default App;
