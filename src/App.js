import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI status
      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    } else {
      alert('Please enter both weight and height.');
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="calculator">
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />
        </div>
        <div className="buttons">
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={resetCalculator}>Reset</button>
        </div>
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
