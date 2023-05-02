import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [save, setCount] = useState(age);
 

  // const [inputValue, setinputValue] = useState("");
  // const [showText, setshowText] = useState(true);
  // const [textColor, settextColor] = useState("black");

  // const handleInputChange = (event)=>
  // {
  //   setinputValue(event.target.value)
  // }
 
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
    setCount(age);
  };

  // let toogleText = () => {
  //   settextColor(textColor === "black" ? "red" : "black");
  // };
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
        {/* <input type="text" onChange={handleInputChange}/>
      {inputValue} */}

        {/* the text below simply means if showtext is ==== true then show the h1 textbelow */}

        {/* {showText === true && <h1>Hi My Name Is Wisdom</h1>} */}
        {/* <h1 style={{ color: textColor }}>Hi My Name Is Wisdom</h1>
      <button onClick={toogleText}>Hide / SHOW tEXT</button> */}
      </div>
    </>
  );
  // state is just like a variable that holds data
}

export default App;
