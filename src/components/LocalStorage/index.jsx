// Trial 5 START

export default function LightDarkMode() {
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p className="">Light Dark Mode && Local Storage</p>
        <button className="">Change Theme</button>
      </div>
    </div>
  );
}

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
