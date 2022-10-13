import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  //state variable to keep track of the color of the Child component
  const [childrenColor, setChildrenColor] = useState("#fff"); //initial value is white

  //callback function to be passed as prop
  function handleChangeColor() {
    const newRandomColor = getRandomColor(); //get a new random color from the helpter function
    setColor(newRandomColor); //update value of state variable color

    const newChildrenRandomColor = getRandomColor(); //get new random color for Child component
    setChildrenColor(newChildrenRandomColor); //update childrenColor state
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color={childrenColor}/>
      <Child onChangeColor={handleChangeColor} color={childrenColor}/>
    </div>
  );
}

export default Parent;
