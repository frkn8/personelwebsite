import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function Profile() {
  const { t } = useContext(Context);
  return (
    <section
      id="Profile"
      className="pb-[10rem] pt-[6rem] bg-[#F4F4F4] dark:bg-[#2A262B]"
    >
      <div className="w-full xl:w-8/12 2xl:w-7/12 px-10 xl:px-0 xl:mx-auto max-w-[1440px] relative">
        <div className="absolute w-[13.9%] aspect-square rounded-full border-[25px] border-solid border-[#FF8C00] right-[10%]  top-[-200px]"></div>

        <h1
          className="text-center text-[#000000] dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          {t("title_profile")}
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center rounded-[12px] text-[#000000] dark:text-[#FFFFFF] ">
          <div
            id="Information"
            className="hover:scale-105 flex w-full xl:w-[46.5%] max-w-[500px] flex-col xl:ml-7 p-10 gap-5 mt-[2rem] bg-[#FFFFFF] dark:bg-[#525252] shadow-gray"
          >
            <h4 id="basic-information" className="text-[#FF8C00] mb-[0.8rem]">
              {t("profile_header")}
            </h4>
            <ul className="flex flex-col gap-5  ">
              <li className="flex flex-row">
                <h5 id="info-keyss"> {t("profile_birth_header")}</h5>
                <span id="info-values"> {t("profile_birth_value")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-keyss">{t("profile_city_header")}</h5>
                <span id="info-values">{t("profile_city_value")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-keyss">{t("profile_education_header")}</h5>
                <span id="info-values">{t("profile_education_value")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-keyss">{t("profile_department_header")}</h5>
                <span id="info-values">{t("profile_department_value")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-keyss">{t("profile_graduation_header")}</h5>
                <span id="info-values">{t("profile_graduation_value")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-keyss">{t("profile_role_header")}</h5>
                <span id="info-values">{t("profile_role_value")}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center w-full xl:w-6/12 ml-[1.4rem] p-10 mt-[1.5rem] gap-5">
            <span className="relative">
              <span className="absolute w-[90px] h-[18px] bg-[#998d7f] top-[1.04rem] left-[-0.7rem] rounded-[4px] dark:bg-[#998d7f]"></span>{" "}
              <h4 id="about-me-title" className="relative z-10">
                {t("about_me_title")}
              </h4>
            </span>{" "}
            <p id="about-me" className="mb-1">
              {t("about_me_text1")}
            </p>
            <p id="about-me">{t("about_me_text2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}