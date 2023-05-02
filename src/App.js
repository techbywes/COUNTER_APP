import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [save, setSave] = useState(0);

  let AddAge = () => {
    setAge(age + 1);
  };
  let ReduceAge = () => {
    setAge(age - 1);
  };

  let ResetAge = () => {
    setAge(0);
  };
  let saveAge = () => {
    if (save === 0) {
      setSave(age);
    } else {
      setSave(save + age);
    }
  };

  return (
    <>
      <h2>COUNTER APP</h2>
      <div className="App">
        <div className="age_numbers">
          <h1>{age}</h1>
          <div className="circle">
            <h1>{save}</h1>
          </div>
        </div>
        <button onClick={AddAge}>Increase</button>
        <button onClick={ReduceAge}>Reduce</button>
        <button onClick={ResetAge}>Reset</button>
        <button onClick={saveAge}>Save</button>
      </div>
    </>
  );
  // state is just like a variable that holds data
}

export default App;
