import "./App.css";
import React, { useState } from "react";
import Array from "./Components/Array";

function App() {
  const myArray = [
    { id: "0", name: "Sujal", age: "27" },
    { id: "1", name: "Aniket", age: "17" },
    { id: "2", name: "Ashok", age: "26" },
  ]

  const [code, setCode] = useState(myArray);

  const handleClick = (e) => {
    setCode([]);
  };

  return (
    <div className="App">
      {/* {code.map((item) => (
        <h1 key={item.id}>
          Name: {item.name} & Age: {item.age}
        </h1>
      ))}
      <button onClick={handleClick}> Click me</button> */}
      <Array code={code} handleClick={handleClick}/>
    </div>
  );
}

export default App;
