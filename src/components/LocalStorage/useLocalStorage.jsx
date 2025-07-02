// Trial 5 START














// Trial 5 END


















// Trial 4 START

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
//   })
      
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value])
    
//     return [value, setValue];
// }

// Trial 4 END

// Trial 3 START

// import { useEffect, useState } from "react";

// export default function useLocalStorage(key, defaultValue) {

//     const [value, setValue] = useState(() => {
//         let currentValue;

//         try {
//             JSON.parse(localStorage.getItem(key) || String(defaultValue));
//         } catch (error) {
//             console.log(error)
//             currentValue = defaultValue;
//         }
//         return currentValue;
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value])

//     return [value, setValue];
// }

// Trial 3 END

// Trial 2 START

// import { useEffect, useState } from "react";

// export default function useLocalStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     let currentValue;

//     try {
//       // This gets the key from LS if its' there OR stringifies the defaultValue we already have
//       currentValue = JSON.parse(
//         localStorage.getItem(key) || String(defaultValue)
//       );
//     } catch (error) {
//       console.log(error);
//       // this is in case of error, setting currentValue to whatever is already there
//       currentValue = defaultValue;
//     }
//     return currentValue;
//   });

//     // For the SAVE portion of Local Storage
//     useEffect(() => {
//         // regular JS for local storage
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value])

//     return [value, setValue];
// }

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

// Trial 1 END
