import gitHub from "../info/github.svg";
import gitHubdark from "../info/githubdark.svg";
import linkedIn from "../info/LinkedIn.svg";
import linkedInDark from "../info/LinkedIndark.svg";
import foto2 from "../info/foto2.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";

export default function () {
  const { theme, setTheme, t, i18n, handleChangeLang } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="bg-[#F4F4F4] dark:bg-[#2A262B]">
      <header className="App-header flex flex-col w-7/12 mx-auto max-w-[1440px] relative">
        <div className="absolute w-[10%] aspect-square rounded-full bg-[#D9D9D9] dark:bg-[#525252] left-[23%] top-[-6.1%]"></div>
        <div className="absolute w-[217px] h-[59px] rounded-[29.5px] bg-[#FF8C00]  right-[-23.2%] bottom-[19%]"></div>
        <div className="absolute w-[10.9%] aspect-square rounded-full  border-[21px] border-solid border-[#D9D9D9] dark:border-[#525252] right-[10.5%] bottom-[-8.4%]"></div>

        <div
          id="toggle"
          className="flex self-end mt-[4.5rem] mb-[3.5rem] gap-4 justify-center items-center"
        >
          <span
            onClick={themeToggle}
            className="flex p-1 w-[3.4rem] rounded-xl bg-[#FF8C00] dark:bg-[#000000]"
          >
            <span
              className={
                theme === "light"
                  ? `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex ml-7 relative`
                  : `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex relative`
              }
            >
              {theme === "dark" && (
                <span className=" absolute flex p-1 w-[13px] h-[13px] rounded-xl bg-[#000000] bottom-[0.1rem] ml-[2px]">
                  {" "}
                </span>
              )}
            </span>
          </span>

          <h4 className="dark:text-[#D9D9D9] text-[#777777] mr-[-0.5rem]">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </h4>

          <span className="text-[#777777]">|</span>
          {i18n.language === "en" ? (
            <h4
              onClick={() => handleChangeLang("tr")}
              className="dark:text-[#777777] text-[#777777] cursor-default"
            >
              <span className="text-[#777777] hover:text-[#FF8C00]">
                TÜRKÇE
              </span>
              'YE GEÇ
            </h4>
          ) : (
            <h4
              onClick={() => handleChangeLang("en")}
              className="dark:text-[#777777] text-[#777777] cursor-default"
            >
              TO{" "}
              <span className="text-[#777777] hover:text-[#FF8C00]">
                ENGLISH
              </span>
            </h4>
          )}
        </div>
        <section className="info flex flex-row justify-between mb-20">
          <div className="info-text flex flex-col w-3/5">
            <div className=" px-[0.6rem]  ">
              <p
                id="info-text-hi"
                className="mb-5 text-[#000000] dark:text-[#FFFFFF]"
              >
                {t("infoHeader")}
              </p>
              <p>
                <h1
                  id="info-text"
                  className="text-[#0a0a14] dark:text-[#FFFFFF]"
                >
                  <span className="relative">
                    <span className="absolute w-[78%] h-[61%] bg-[#FF8C00] top-[2.04rem] right-[3.25rem] rounded-[4px]"></span>{" "}
                    <span className="relative z-10">{t("infoName")}</span>
                  </span>{" "}
                  {t("infoParag")}
                </h1>
              </p>
            </div>
            <div className="mt-14 mb-[1rem] px-[0.7rem] flex gap-5">
              <a
                href="https://www.linkedin.com/in/frknozkan8/"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/frknozkan8/",
                    "_blank"
                  );
                }}
              >
                <img src={theme === "light" ? linkedIn : linkedInDark} />
              </a>
              <a
                href="https://github.com/frkn8"
                onClick={(event) => {
                  event.preventDefault();
                  window.open("https://github.com/frkn8", "_blank");
                }}
              >
                <img src={theme === "light" ? gitHub : gitHubdark} />
              </a>
            </div>
            <div
              id="info-text-footer"
              className=" w-[85%] px-[0.5rem] pt-2 pb-[0.7rem] "
            >
              <p className="text-[#000000] dark:text-[#FFFFFF]">
                <span className=" w-[10%]">
                  {" "}
                  {t("infoFooter1")}
                  <span className="text-[#FF8C00] dark:text-[#FF8C00]">
                    {" "}
                    {t("infoFooter2")}{" "}
                  </span>
                  {t("infoFooter3")}
                  <span className="text-[#FF8C00] dark:text-[#FF8C00] tracking-wider">
                    {" "}
                    {t("infoFooter4")}{" "}
                  </span>
                  {t("infoFooter5")}
                </span>{" "}
                <br />
                <br />
                <a
                  href="mailto: frknozkan8@gmail.com"
                  className="text-[#FF8C00] underline tracking-widest dark:text-[#FF8C00]"
                >
                  {t("infoEmail")}
                </a>
              </p>
            </div>
          </div>

          <img
            className="mt-[3.4rem] mr-2 object-cover w-[341px] h-[341px]  shadow-red rounded-[22px] dark:brightness-[.9] "
            src={foto2}
            alt=""
          />
        </section>
      </header>
    </section>
  );
}
