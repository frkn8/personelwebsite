import { useContext } from "react";
import Project from "./Project";
import { Context } from "../contexts/Context";
export function Projects() {
  const { t } = useContext(Context);
  const projectsData = [
    {
      titleEn: "Furkan's Pizza House",
      titleTr: "Furkan'ın Pizza Evi",
      bodyEn:
        "This project is a platform that provides users with a homepage and an order form, enabling them to place orders easily and quickly.",
      bodyTr:
        "Bu proje, kullanıcılara bir anasayfa ve sipariş formu sunarak kolay ve hızlı bir şekilde sipariş verme imkanı sağlayan bir platformdur.",
      skillsUsed: ["react", "axios", "yup", "router", "cypress"],
      gitHubLink: "https://github.com/frkn8/fsweb-s7-challenge-pizza",
      vercelLink: "https://furkanpizza.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/Phw2YZT/pizza.png",
      lightBG: "#DDEEFE",
      darkBG: "#2D3235",
    },

    {
      titleEn: "Gratitude Diary",
      titleTr: "Minnet Günlüğü",
      bodyEn:
        "Our project empowers users to recognize, appreciate, and document points of appreciation in their daily lives in written form.",
      bodyTr:
        "Projemiz, kullanıcıların günlük yaşamlarında takdir edilecek noktaları fark etmelerine ve bunları yazılı bir şekilde kaydetmelerine olanak tanır.",
      skillsUsed: ["react", "redux", "tailwind", "axios", "router", "date-fns"],
      gitHubLink: "https://github.com/frkn8/fsweb-s10-challenge",
      vercelLink: "https://furks-grateful-diary.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/vkw4B54/React-App.png",
      lightBG: "#D9F6F1",
      darkBG: "#495351",
    },
  ];

  return (
    <section id="Projects" className="dark:bg-[#484148] " >
      <div className="pb-[8rem] pt-[2rem] max-w-[1440px] flex flex-col mx-auto ">
        <h1
          className="text-center py-8 dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          {t("my_projects_title")}
        </h1>
        <div className="flex flex-row justify-center gap-[4.2rem]  ">
          {projectsData.map((project, i) => {
            return <Project key={i} data={project} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}