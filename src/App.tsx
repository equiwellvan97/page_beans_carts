import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Search from "./components/Search";
import { useState } from "react";
import { Dispatch } from "react";
// import useOnlineStatus from "./components/hooks/useOnlineStatus";
import useDeviceType from "./components/hooks/useDeviceType";
import { DeviceType } from "./components/hooks/useDeviceType";
import ThemeContext from "./ThemeContext";

export type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

function App() {
  const [filterValue, setFilterValue] = useState("");

  // const status = useOnlineStatus();
  // console.log("status", status); // Хук чтобы смотреть онлайн пользователь или нет

  const windowSize = useDeviceType();

  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <Header />
        {windowSize === DeviceType.MOBILE && <h2>MOBILE</h2>}
        {windowSize === DeviceType.TABLET && <h2>TABLET</h2>}
        {windowSize === DeviceType.DESKTOP && <h2>DESKTOP</h2>}
        <Search setFilterValue={setFilterValue} />
        <Cards filterValue={filterValue} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
