import { useState } from 'react';

function App() {
  //Addition of 2 numbers
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [subresult, setSubResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  }

  const handleSubtract = (e) => {
    e.preventDefault();
    const sub = parseInt(num1) - parseInt(num2);
    setSubResult(sub);
  }

  return (
    <div>
      <form onSubmit ={handleSubmit}>
          <input type="number" placeholder="Enter first number" value={num1}
          onChange={(e)=>setNum1(e.target.value)}
          ></input>
          <input type="number" placeholder="Enter second number" value={num2}
          onChange={(e)=>setNum2(e.target.value)}>
          </input>
          <button type="submit">Add</button>
          <button type="button" onClick={handleSubtract}>Sub</button>
          <h2>Additon Result: {result}</h2>
          <h2>Subtract Result: {subresult}</h2>
      </form>
    </div>
  );
}

export default App;
