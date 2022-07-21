import "./App.css";
import React, { useState } from "react";

function App() {
  const [code, setCode] = useState([
    { id: "0", name: "Sujal", age: "27" },
    { id: "1", name: "Aniket", age: "17" },
    { id: "2", name: "Ashok", age: "26" },
  ]);

  const handleClick = () => {
    setCode([]);
  };

  return (
    <div className="App">
      {code.map((item) => {
        return (
          <h1 key={item.id}>
            Name: {item.name} & Age: {item.age}
          </h1>
        );
      })}
    
        <button onClick={handleClick}> Click me</button>
      
    </div>
  );
}

export default App;
