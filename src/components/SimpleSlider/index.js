import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import "./slick.css";
import "./slick-theme.css";
import skillData from "../../mock.json";

const SimpleSlider = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center mb-8 mx-8 md:mx-28 xl:mx-48 mt-32">
      <div className="skillsContent">
        <h3 id="section-title" className="text-[#0a0a14] dark:text-[#F4F4F4]">{t("title_skills")}</h3>
        <Slider {...settings}>
          {skillData.map((skill) => (
            <div className="list" key={skill.name}>
              <div className="skill-heading">
                <div className="skill-list">
                  <div className="js">
                    <img
                      className="hover:scale-105"
                      src={skill.skillImg}
                      alt="skillImg"
                    />
                    <h3 className=" dark:text-[#F4F4F4]">{skill.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;