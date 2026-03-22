import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";


function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  // Logic...................
const calBmi = (e) => {
  e.preventDefault();

  if (weight <= 0 || height <= 0) {
    alert("Enter valid weight and height");
    return;
  }

  const bmiValue = weight / ((height / 100) * (height / 100));
  setBmi(bmiValue.toFixed(1));

  if (bmiValue < 18.5) {
    setMessage("Underweight");
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    setMessage("Normal weight");
  } else if (bmiValue >= 25 && bmiValue < 30) {
    setMessage("Overweight");
  } else {
    setMessage("Obese");
  }
};

  const reload = () =>{
    window.location.reload()
  }










  return (
    <div className="container">
      <h2>BMI CALCULATOR</h2>
      <form onSubmit={calBmi}>
        <div>
          <label>Weight (Kg)</label>
          <input type="text" 
          placeholder="Enter Your Weight" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Height(cm)</label>
          <input type="text"
           placeholder="Enter Your height"
           value={height} 
           onChange={(e) => setHeight(e.target.value)}/>
          </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outLine" type="submit" onClick={reload}>
            Reload
          </button>
        </div>
        <div className={`center ${message}`}>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
