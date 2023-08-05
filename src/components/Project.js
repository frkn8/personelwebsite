import laptop from "../projects/laptop.png";
import arrowRight from "../projects/arrow-right.svg";
import arrowRightDark from "../projects/arrow-right-dark.svg";
import { Context } from "../contexts/Context";
import { useContext } from "react";

export default function Project(props) {
  const { theme, t, i18n} = useContext(Context);
  const lang = i18n.language;

  const { data, index } = props;
  console.log(index);
  return (
    <div
      id="Project-page "
      className={
        index % 2 === 0
          ? `box-border max-w-[500px] max-h-[668px] flex flex-col p-10 bg-[#ffd29c82] rounded-[12px] dark:bg-[#63523c82] text-[#000000] dark:text-[#FFFFFF]`
          : `box-border max-w-[500px] max-h-[668px] flex flex-col p-10 bg-[#F4F2ED] rounded-[12px] dark:bg-[#5e5c5b] text-[#000000] dark:text-[#FFFFFF]`
      }
    >
      <h3 id="project-title" className="mb-4">
        {lang === "tr" ? data.titleTr : data.titleEn}
      </h3>
      <p id="project-text">{lang === "tr" ? data.bodyTr : data.bodyEn}</p>

      <ul className="flex flex-row flex-wrap w-80 gap-3 my-5">
        {data.skillsUsed.map((skill, i) => {
          return (
            <li key={i} id="project-skills">
              {skill}
            </li>
          );
        })}
      </ul>
      <div id="project-link" className="flex justify-between mt-4">
        <a href={data.gitHubLink} target="_blank" rel="noopener noreferrer">
          {t("project_to_github")}
        </a>

        <a
          href={data.vercelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          {t("project_to_site")}
          <img
            src={theme === "light" ? arrowRight : arrowRightDark}
            alt="arrowRight"
          />
        </a>
      </div>
      <div
        id="Project-img"
        className="flex relative h-[500px] items-center justify-center"
      >
        <img
          src={data.projectImageURL}
          className=" absolute top-[111px] max-w-[380px] h-[220px] object-cover "
        />
        <img src={laptop} className=" absolute top-[95px] max-w-[500px] " />
      </div>
    </div>
  );
}
