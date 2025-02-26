import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  return <div className="child" onClick={onChangeColor} style={{ backgroundColor: color }} />;
}

export default Child;
