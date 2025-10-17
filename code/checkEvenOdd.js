/** NOTE
 * why do we need to parse the string into number? => Because we are taking the input as string (type = "text") and we need to convert it into number.
 * Even when you use type="number" in your input field, the value you get from e.target.value is still a string. 
 * That’s just how HTML input elements work — they always return strings, regardless of the input type. ex: Try typing 42 — the console will log "string".
 * 


 */





import React, { useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(null);
  const [result, setResult] = useState(null);

  const checkNumber = (input) => {
    if (input % 2 === 0) {
      return 
    }
  }

  const handlerInput = () => {
    
  }

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        data-testid = "number-input"
        type="text"
        placeholder="Enter a number"
        onChange = {(e) => setNumber(e.target.value)}
      />

      <button
        className="check-button"
        data-testid="number-input"
      >Check</button>

      <div className="loading">
        <div
          className="loading"
          data-testid="loading"
        >Checking...</div>
      </div>

      <div className="result-area">
        <div
          className="result"
          data-testid="number-input"
        >Result appears here</div>
      </div>

      
    </div>
  );
}

export default EvenOrOddChecker;
