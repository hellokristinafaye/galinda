/* eslint-disable no-unreachable */
import { useState } from "react";





export default function RandomColor() {
    // For either Hex or RGB
    const [typeOfColor, setTypeOfColor] = useState('hex');
    // For the color itself
    const [color, setColor] = useState('#000000');



  return(
    // eslint-disable-next-line no-unreachable
    // adding inline styling instead of a CSS file

    <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
    }}>
      <button className="">Create HEX Color</button>
      <button className="">Create RGBg Color</button>
    <button className="">Generate Random Color</button>
  </div>);
}
