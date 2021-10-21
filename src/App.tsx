import { useState } from 'react';
import './App.css';
import Display from './components/Display'
import Pad from './components/Pad'

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberClick = (number: number) => {
    setDisplayValue(displayValue === '0'? number.toString() : displayValue.concat(number.toString()));
  } 

  const handleDelClick = () => {
    const valor = displayValue.slice(0,-1);
    setDisplayValue(valor.length ? valor : '0');
  }

  const handleResetClick = () => {
    setDisplayValue('0');
  }

  const handleResultClick = () => {
    const result = eval(displayValue);  //eval pega a expressão e faz a operação descrita (usar com cautela em operações de deletar)
    setDisplayValue(result.toString());
  }

  return (
    <div className="App">
      <div className='calculator'>
        <Display value={displayValue} />
        <Pad handleNumberClick={handleNumberClick} handleDelClick={handleDelClick} handleResetClick={handleResetClick} handleResultClick={handleResultClick} />
      </div>
    </div>
  );
}

export default App;
