import "./App.css";
import { useState } from "react";

// Add a fucntionality that lets users save and access their saved counts
// when they come back or it can be called hsiory
//give them the ability to title each count they do
// eg if it was for studnets or for a train station etc
function App() {
  const [age, setAge] = useState(0);
  const [save, setSave] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitted(true);
  };

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
      {isSubmitted && <h2>{inputValue}</h2>}
      <div className="App">
        <div className="input_btn">
          {!isSubmitted && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Counter Title"
                className="input_box"
              />
              <button className="inputBtn" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>

        <div className="age_numbers">
          <h1>{age}</h1>
          <div className="circle">
            <h1>{save}</h1>
          </div>
        </div>
        <button onClick={AddAge} className="btn_all">
          Increase
        </button>
        <button onClick={ReduceAge} className="btn_all">
          Reduce
        </button>
        <button onClick={ResetAge} className="btn_all">
          Reset
        </button>
        <button onClick={saveAge} className="btn_all">
          Save
        </button>
      </div>
    </>
  );
  // state is just like a variable that holds data
}

export default App;
