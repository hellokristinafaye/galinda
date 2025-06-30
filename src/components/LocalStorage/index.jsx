import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

  return (
    <div className="light-dark-mode">
      <div className="container">
        <p className="">Hello World!</p>
        <button className="">Change Theme</button>
      </div>
    </div>
  );
}
