// Trial 2 START

import useLocalStorage from "./useLocalStorage"

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function handleToggleTheme() {
        setTheme(theme === 'light'? 'dark': 'light');
    }
    console.log(theme);
    
    return (
      <div className="light-dark-mode" data-theme="theme">
        <div className="container">
          <p className="">Hello World!</p>
          <button onClick={handleToggleTheme} className="">
            Change Theme
          </button>
        </div>
      </div>
    );
}




// Trial 2 END












// Trial 1 START
// import useLocalStorage from "./useLocalStorage";
// import './theme.css'

// export default function LightDarkMode() {
//   const [theme, setTheme] = useLocalStorage("theme", "dark");

//   function handleToggleTheme() {
//     setTheme(theme === "light" ? "dark" : "light");
//   }

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