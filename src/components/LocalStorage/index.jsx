// Trial 6 START

import useLocalStorage from "./useLocalStorage";

// Create a persistent light/dark mode
// I would create a page with some text and a button that changes the theme upon click.  I"ll also create a custom hook called "useLocalStorage" to get and set data in local storage.

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    

    return (
      <div className="light-dark-mode">
        <div className="container">
                <p className="">LightDarkMode X Local Storage</p>
                <button  className="">Change Theme</button>
        </div>
      </div>
    );
}





// Trial 6 END

























// Trial 5 START

// import useLocalStorage from "./useLocalStorage";
// import './theme.css'

// export default function LightDarkMode() {

//   const [theme, setTheme] = useLocalStorage("theme", "dark");

//   function handleToggleTheme() {
//     setTheme(theme === "light" ? "dark" : "light");
//     console.log(theme)
//   }

//   return (
//     <div className="light-dark-mode" data-theme={theme}>
//       <div className="container">
//         <p className="">Light Dark Mode && Local Storage</p>
//         <button onClick={handleToggleTheme} className="">
//           Change Theme
//         </button>
//       </div>
//     </div>
//   );
// }

// Trial 5 END

// Trial 4 START

// import useLocalStorage from "./useLocalStorage"
// import './theme.css'
// export default function LightDarkMode() {

//     const [theme, setTheme] = useLocalStorage("theme", "dark");

//     function handleToggleTheme() {
//         setTheme(theme === 'light'? 'dark': 'light');
//     }

//     console.log(theme)

//     return (
//         <div className="light-dark-mode" data-theme={theme}>
//             <div className="container">
//                 <p className="">Hello Trial 4</p>
//                 <button onClick={handleToggleTheme} className="">Change Theme</button>
//             </div>
//         </div>
//     )
// }

// Trial 4 END

// Trial 3 START

// import useLocalStorage from "./useLocalStorage"
// import './theme.css'

// export default function LightDarkMode() {

//     const [theme, setTheme] = useLocalStorage('theme', 'dark');

//     function handleToggleTheme() {
//         setTheme(theme === 'light' ? 'dark': 'light');
// }
//     console.log(theme)

//     return <div className="light-dark-mode" data-theme={theme}>
//         <div className="container">
//             <p className="">Hello World!</p>
//             <button onClick={handleToggleTheme} className="">Change Theme</button>
//         </div>
//     </div>
// }

// Trial 3 END

// Trial 2 START

// import useLocalStorage from "./useLocalStorage"
// import './theme.css'

// export default function LightDarkMode() {

//     const [theme, setTheme] = useLocalStorage("theme", "dark");

//     function handleToggleTheme() {
//         setTheme(theme === 'light'? 'dark': 'light');
//     }
//     console.log(theme);

//     return (
//       <div className="light-dark-mode" data-theme={theme}>
//         <div className="container">
//           <p className="">Hello World!</p>
//           <button onClick={handleToggleTheme} className="">
//             Change Theme
//           </button>
//         </div>
//       </div>
//     );
// }

// Trial 2 END

// Trial 1 START

// import useLocalStorage from "./useLocalStorage";
// import './theme.css'

// export default function LightDarkMode() {
//   const [theme, setTheme] = useLocalStorage("theme", "dark");

//   function handleToggleTheme() {
//     setTheme(theme === "light" ? "dark" : "light");
//   }

//     // console.log(theme);

//   return (
//     <div className="light-dark-mode" data-theme={theme}>
//       <div className="container">
//         <p className="">Hello World!</p>
//         <button onClick={handleToggleTheme} className="">
//           Change Theme
//         </button>
//       </div>
//     </div>
//   );
// }

// Trial 1 END
