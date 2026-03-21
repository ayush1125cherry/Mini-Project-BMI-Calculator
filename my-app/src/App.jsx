import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";


function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  // Logic...................
    










  return (
    <div className="container">
      <h2>BMI CALCULATOR</h2>
      <form>
        <div>
          <label>Weight (lbs)</label>
          <input type="text" 
          placeholder="Enter Your Weight" 
          value={weight} 
          onChange={(e) => setWeight=(e.target.value)}/>
        </div>
        <div>
          <label>Height(in)</label>
          <input type="text"
           placeholder="Enter Your height"
           value={height} 
           onChange={(e) => setHeight=(e.target.value)}/>
          </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outLine" type="submit" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
