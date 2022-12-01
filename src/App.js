import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input,setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
    }
    else {
      alert("Por favor ingrese valores para realizar los calculos")
    }
  }

  

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla 
          input = {input}
        />
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>1</Boton>
          <Boton manejarClick = {agregarInput}>2</Boton>
          <Boton manejarClick = {agregarInput}>3</Boton>
          <Boton manejarClick = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>4</Boton>
        <Boton manejarClick = {agregarInput}>5</Boton>
        <Boton manejarClick = {agregarInput}>6</Boton>
        <Boton manejarClick = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>7</Boton>
        <Boton manejarClick = {agregarInput}>8</Boton>
        <Boton manejarClick = {agregarInput}>9</Boton>
        <Boton manejarClick = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {calcularResultado}>=</Boton>
          <Boton manejarClick = {agregarInput}>0</Boton>
          <Boton manejarClick = {agregarInput}>.</Boton>
          <Boton manejarClick = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
