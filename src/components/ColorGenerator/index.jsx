/* eslint-disable no-unreachable */
import { useState } from "react";

export default function RandomColor() {
  // For either Hex or RGB
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // For the color itself
  const [color, setColor] = useState("#000000");

  function handleCreateHexRandomColor() {
    // #123345
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  }

  function handleCreateRGBRandomColor() {}

  return (
    // eslint-disable-next-line no-unreachable
    // adding inline styling instead of a CSS file

    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")} className="">
        Create HEX Color
      </button>
      <button onClick={() => setTypeOfColor("rgb")} className="">
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateHexRandomColor
            : handleCreateRGBRandomColor
        }
        className=""
      >
        Generate Random Color
      </button>
    </div>
  );
}
