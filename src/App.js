import { useEffect, useState, useTransition } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Profile from "./components/Profile";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { Context } from "./contexts/Context";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [theme, setTheme] = useState(null);

  const handleChangeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    console.log(i18n);
  };
  const { t, i18n } = useTranslation();

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        handleChangeLang,
        t,
        i18n,
      }}
    >
      <div className="App w-max-screen h-[3094px] bg-white dark:bg-[#484148] ">
        <div className="mx-auto ">
          <Info />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;