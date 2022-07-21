import React from "react";

const Array = ({code, handleClick}) => {
  return (
    <div>
      {code.map((item) => (
        <h1 key={item.id}>
          Name: {item.name} & Age: {item.age}
        </h1>
      ))}
      <button onClick={handleClick}> Clear</button>
    </div>
  );
};

export default Array;
