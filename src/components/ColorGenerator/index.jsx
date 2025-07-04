// Trial 2 START

import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomChar(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hexChars = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      hexCode += hexChars[randomChar(hexChars.length)];
    }
    console.log(hexCode);
    setColor(hexCode);
  }

  function handleCreateRGBColor() {
    const r = randomChar(256);
    const g = randomChar(256);
    const b = randomChar(256);

    setColor(`rgb(${r}, ${g}, ${b})`);

    console.log(color);
  }

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "block",
        justifyContent: "center",
        paddingTop:"400px",
        alignItems: "center",
        background: color,
      }}
    >
      <div
        className=""
        style={{
          color: "white",
        }}
      >
        <h1 className="">{typeOfColor === "rgb" ? "rgb" : "hex"}</h1>
        <h3 className="">{color}</h3>
      </div>
      
      <div
        className="button-container"
        style={{
          gap: "10px",
        }}
      >
        <button
          className=""
          style={{
            margin: "10px",
            padding: "10px",
          }}
          onClick={() => setTypeOfColor("hex")}
        >
          Hex Colors
        </button>
        <button
          className=""
          style={{
            margin: "10px",
            padding: "10px",
          }}
          onClick={() => setTypeOfColor("rgb")}
        >
          RGB Colors
        </button>
        <button
          className=""
          style={{
            margin: "10px",
            padding: "10px",
          }}
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRGBColor
          }
        >
          Generate a New Color
        </button>
      </div>
    </div>
  );
}

// Trial 2 END

// Trial 1 START
/* eslint-disable no-unreachable */
// import { useEffect, useState } from "react";

// export default function RandomColor() {
//   // For either Hex or RGB
//   const [typeOfColor, setTypeOfColor] = useState("hex");
//   // For the color itself
//   const [color, setColor] = useState("#000000");

//   // helper function aka utility for randomness
//   function randomColorUtility(length) {
//     return Math.floor(Math.random() * length);
//   }

//   function handleCreateHexRandomColor() {
//     // #123345
//     //   This array holds all the available values we can use for the hex code
//     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     //   This string will eventually be the hex color code that displays
//     let hexColor = "#";
//     // This is a forloop that will randomly choose a value from the hex array 6 times, and then add it to the hexColor string. hex.length b/c it chooses a random value from the size of the hex array.
//     for (let i = 0; i < 6; i++) {
//       hexColor += hex[randomColorUtility(hex.length)];
//     }
//     console.log(hexColor);
//     setColor(hexColor);
//   }

//   function handleCreateRGBRandomColor() {
//     const r = randomColorUtility(256);
//     const g = randomColorUtility(256);
//     const b = randomColorUtility(256);

//     setColor(`rgb(${r}, ${g}, ${b})`);
//   }

//     useEffect(() => {
//         if (typeOfColor === 'rgb') {
//             handleCreateRGBRandomColor()
//         } else {
//             handleCreateHexRandomColor();
//         }
//     }, [typeOfColor]);

//   return (
//     // eslint-disable-next-line no-unreachable
//     // adding inline styling instead of a CSS file

//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: color,
//       }}
//     >
//       <button onClick={() => setTypeOfColor("hex")} className="">
//         Create HEX Color
//       </button>
//       <button onClick={() => setTypeOfColor("rgb")} className="">
//         Create RGB Color
//       </button>
//       <button
//         onClick={
//           typeOfColor === "hex"
//             ? handleCreateHexRandomColor
//             : handleCreateRGBRandomColor
//         }
//         className=""
//       >
//         Generate Random Color
//       </button>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           fontSize: "60px",
//                   marginTop: "50px",
//                   flexDirection: 'column',
//           gap: '20px'
//         }}
//       >
//         <h3 className="">
//           {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
//         </h3>
//         <h1 className="">{color}</h1>
//       </div>
//     </div>
//   );
// }

// Trial 1 END
