// Trial 2 START








// Trial 2 END


















// Trial 1 START
// import { useEffect, useState } from "react";

// export default function useLocalStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     let currentValue;

//     try {
//       currentValue = JSON.parse(
//         localStorage.getItem(key) || String(defaultValue)
//       );
//     } catch (error) {
//       console.log(error);
//       currentValue = defaultValue;
//     }

//     return currentValue;
//   });
    
//     // 
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue];
// }

// Trial 2 END