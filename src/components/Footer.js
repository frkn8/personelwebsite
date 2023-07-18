import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function Footer() {
  const { theme, setTheme, t, i18n, handleChangeLang } = useContext(Context);
  return (
    <section className="bg-[#eeeeee7d] dark:bg-[#2b272b]">
      <footer className="w-7/12 flex mx-auto max-w-[1440px] ">
        <div className="flex flex-row gap-14 ml-7 mt-[12.6%] mb-[16.0%] justify-center items-center">
          <span className="flex w-6/12 relative">
            <h2 id="footer-text" className="text-[#0A0A14] dark:text-[#FFFFFF]">
              <span className="absolute w-[230px] h-[18px] bg-[#998d7f] top-[2.6rem] left-[12.45rem] rounded-[4px] dark:bg-[#998d7f] z-[10]"></span>{" "}
              {t("footer1")}{" "}
              <span className="relative z-10">{t("footer2")}</span>{" "}
              {t("footer3")}
            </h2>
          </span>

          <nav>
            <ul className="flex flex-col">
              <li>
                <a
                  id="footer-links"
                  href="https://github.com/frkn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1769FF] dark:text-[#82BBFF]"
                >
                  {t("footerNav1")}
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="#"
                  className="text-[#0A0A14] dark:text-[#FFFFFF]"
                >
                  {t("footerNav2")}
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="https://www.linkedin.com/in/frknozkan8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B5] dark:text-[#419CCB]"
                >
                  {t("footerNav3")}
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="mailto: frknozkan8@gmail.com"
                  className="text-[#FF8C00] dark:text-[#FF8C00]"
                >
                  {t("footerNav4")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </section>
  );
}
