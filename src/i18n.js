import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      heroheading1: `Merhaba!👋`,
      heroheading2: `Ben Furkan.`,
      infoparagraph: `Profesyonel olarak yazılım geliştirme hizmeti sağlıyorum. Sizin için, benzersiz ve etkileyici web siteleri geliştirerek hizmet verebilirim.`,
      footertext1: "Eğer",
      footertext2: "kullanıcı dostu, işlevsel ve göz alıcı",
      footertext3: "bir web sitesine ihtiyacınız varsa hemen",
      footertext4: "iletişime",
      footertext5: "geçin.",
      footertext6: "Takımına dahil olmamı istiyorsan davet atabilirsin",
      mailto: "👉 frknozkan8@gmail.com",
      title_skills: "Yetenekler",
      titple_profile: "Profil",
      profile_header: "Kişisel Bilgiler",
      profile_birth_header: "Doğum Tarihi",
      profile_city_header: "İkamet Şehri",
      profile_education_header: "Eğitim Durumu",
      profile_department_header: "Bölüm",
      profile_graduation_header: "Mezuniyet Tarihi",
      profile_role_header: "Tercih Ettiği Rol",
      profile_birth_value: "13.07.1995",
      profile_city_value: "İstanbul",
      profile_education_value: "Yakın Doğu Üniversitesi",
      profile_department_value: "Bilişim Sistemleri Mühendisliği",
      profile_graduation_value: "01.10.2021",
      profile_role_value: "Yazılım Mühendisi",
      about_me_title: "Hakkımda",
      about_me_text1:
        "Web sitesi oluşturma, güncelleme, CRM ve veritabanı yönetimi gibi teknik becerilerimle birlikte etkili iletişim, takım çalışması, uyum ve motivasyon gibi softskills yeterliliklere de sahibim.",
      about_me_text2:
        "Bilişim ve Sistem Mühendisliği alanında edindiğim teknik yeteneklerin yanı sıra çalışma yaşamının getirdiği softskills becerilerine de önem veriyor ve gelişimime katkı sunabilecek fırsatları araştırıyorum.",
      my_projects_title: "Projeler",
      project_to_github: "GitHub'ta Görüntüle",
      project_to_site: "Uygulamaya Git",
      footer_text_1: "Bir",
      footer_text_2: "sonraki projende ",
      footer_text_3: "birlikte çalışalım.",
      footer_navigation_1: "GitHub",
      footer_navigation_2: "Kişisel Blog",
      footer_navigation_3: "LinkedIn",
      footer_navigation_4: "Email",
    },
  },
  en: {
    translation: {
      heroheading1: `Hi!👋`,
      heroheading2: `I’m Furkan.`,
      infoparagraph: `I provide professional software development and technical services. I can serve you by developing unique and impressive websites.`,
      footertext1: "If you need a",
      footertext2: "user-friendly, functional, and visually appealing",
      footertext3: "website, please",
      footertext4: "contact me",
      footertext5: "immediately.",
      footertext6: "Invite me to join your team",
      mailto: "👉 frknozkan8@gmail.com",
      title_skills: "Skills",
      titple_profile: "Profile",
      profile_header: "Basic Information",
      profile_birth_header: "Birth Date",
      profile_city_header: "City",
      profile_education_header: "Education",
      profile_department_header: "Department",
      profile_graduation_header: "Graduation Date",
      profile_role_header: "Preferred Role",
      profile_birth_value: "13.07.1995",
      profile_city_value: "Istanbul",
      profile_education_value: "Near East University",
      profile_department_value: "Information Systems Engineering",
      profile_graduation_value: "01.10.2021",
      profile_role_value: "Software Engineer",
      about_me_title: "About me",
      about_me_text1:
        "I possess technical skills such as website creation, updating, CRM, and database management, along with soft skills competencies like effective communication, teamwork, adaptability, and motivation.",
      about_me_text2:
        "In addition to the technical skills I have gained in the field of Information and Systems Engineering, I also value the soft skills acquired through work experience and actively seek opportunities that can contribute to my personal development.",
      my_projects_title: "Projects",
      project_to_github: "View on GitHub",
      project_to_site: "Go to App",
      footer_text_1: "Let's",
      footer_text_2: "work together",
      footer_text_3: "on your next product.",
      footer_navigation_1: "GitHub",
      footer_navigation_2: "Personal Blog",
      footer_navigation_3: "LinkedIn",
      footer_navigation_4: "Email",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: `tr`,
  resources,
});

export default i18n;
