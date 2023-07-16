import { useContext } from "react";
import Project from "./Project";
import { Context } from "../contexts/Context";
export function Projects() {
  const { t } = useContext(Context);
  const projectsData = [
    {
      titleEn: "Shopping Card",
      titleTr: "Alışveriş Sepeti",
      bodyEn:
        "This project aims to enhance the shopping experience for users by providing them with a shopping cart feature on an e-commerce platform.",
      bodyTr:
        "Bu proje, bir e-ticaret platformunda kullanıcılara alışveriş sepeti özelliği sunarak, alışveriş deneyimini geliştirmeyi amaçlamaktadır.",
      skillsUsed: ["react", "axios", "tailwind", "router", "date-fns"],
      gitHubLink: "https://github.com/frkn8/fsweb-s11g1-shopping-cart",
      vercelLink: "https://fsweb-s11g1-shopping-cart-one-fawn.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/BZT72W0/shopping.png",
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
    <section id="Projects">
      <div className="py-[2rem] pb-28 max-w-[1440px] flex flex-col mx-auto">
        <h1
          className="text-center py-8 dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          {t("projectsTitle")}
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