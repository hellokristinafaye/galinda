import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
    console.log(theme);

  return (
    <div className="light-dark-mode">
      <div className="container">
        <p className="">Hello World!</p>
        <button onClick={handleToggleTheme} className="">
          Change Theme
        </button>
      </div>
    </div>
  );
}
