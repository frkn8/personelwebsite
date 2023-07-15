import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      infoHeader: `Merhaba!👋`,
      infoName: `Ben Furkan.`,
      infoParag: `Full-stack web yazılımcısıyım. Eksiksiz ve ölçeklenebilir frontend ürünleri üretebilirim. Hadi tanışalım!`,
      infoFooter1: "Şuanda",
      infoFooter2: "UX, UI, & Web Design",
      infoFooter3: "projeleri için",
      infoFooter4: "Freelance",
      infoFooter5: "hizmet veriyorum.",
      infoFooter6: "Takımına dahil olmamı istiyorsan davet atabilirsin",
      infoEmail: "👉 frknozkan8@gmail.com",
      skillsTitle: "Yetenekler",
      profileTitle: "Profil",
      profileCardHeader: "Kişisel Bilgiler",
      profileCardBirthHead: "Doğum Tarihi",
      profileCardCityHead: "İkamet Şehri",
      profileCardEducationHead: "Eğitim Durumu",
      profileCardDepartmentHead: "Bölüm", 
      profileCardGraduationHead: "Mezuniyet Tarihi",
      profileCardRoleHead: "Tercih Ettiği Rol",
      profileCardBirthValue: "13.07.1995",
      profileCardCityValue: "İstanbul",
      profileCardEducationValue: "Yakın Doğu Üniversitesi",
      profileCardDepartmentValue: "Bilişim Sistemleri Mühendisliği",
      profileCardGraduationValue: "01.10.2021",
      profileCardRoleValue: "Yazılım Mühendisi",
      aboutMeTitle: "Hakkımda",
      aboutMeFirstParag:
        "Web sitesi oluşturma, güncelleme, CRM ve veritabanı yönetimi gibi teknik becerilerimle birlikte etkili iletişim, takım çalışması, uyum ve motivasyon gibi softskills yeterliliklere de sahibim.",
      aboutMeSecondParag:
        "Bilişim ve Sistem Mühendisliği alanında edindiğim teknik yeteneklerin yanı sıra çalışma yaşamının getirdiği softskills becerilerine de önem veriyor ve gelişimime katkı sunabilecek fırsatları araştırıyorum.",
      projectsTitle: "Projeler",
      projectViewGitHub: "GitHub'ta Görüntüle",
      projectVercel: "Uygulamaya Git",
      footer1: "Bir",
      footer2: "sonraki projende ",
      footer3: "birlikte çalışalım.",
      footerNav1: "GitHub",
      footerNav2: "Kişisel Blog",
      footerNav3: "LinkedIn",
      footerNav4: "Email",
    },
  },
  en: {
    translation: {
      infoHeader: `Hi!👋`,
      infoName: `I’m Furkan.`,
      infoParag: `I’m a full-stack developer. I can craft solid and scalable
        frontend products. Let’s meet!`,
      infoFooter1: "Currently",
      infoFooter2: "Freelancing",
      infoFooter3: "for",
      infoFooter4: "UX, UI, & Web Design",
      infoFooter5: "Project.",
      infoFooter6: "Invite me to join your team",
      infoEmail: "👉 frknozkan8@gmail.com",
      skillsTitle: "Skills",
      profileTitle: "Profile",
      profileCardHeader: "Basic Information",
      profileCardBirthHead: "Birth Date",
      profileCardCityHead: "City",
      profileCardEducationHead: "Education",
      profileCardDepartmentHead: "Department",
      profileCardGraduationHead: "Graduation Date",
      profileCardRoleHead: "Preferred Role",
      profileCardBirthValue: "13.07.1995",
      profileCardCityValue: "Istanbul",
      profileCardEducationValue: "Near East University",
      profileCardDepartmentValue: "Information Systems Engineering",
      profileCardGraduationValue: "01.10.2021",
      profileCardRoleValue: "Software Engineer",
      aboutMeTitle: "About me",
      aboutMeFirstParag:
      "I possess technical skills such as website creation, updating, CRM, and database management, along with soft skills competencies like effective communication, teamwork, adaptability, and motivation.",
      aboutMeSecondParag:
      "In addition to the technical skills I have gained in the field of Information and Systems Engineering, I also value the soft skills acquired through work experience and actively seek opportunities that can contribute to my personal development.",
      projectsTitle: "Projects",
      projectViewGitHub: "View on GitHub",
      projectVercel: "Go to App",
      footer1: "Let's",
      footer2: "work together",
      footer3: "on your next product.",
      footerNav1: "GitHub",
      footerNav2: "Personal Blog",
      footerNav3: "LinkedIn",
      footerNav4: "Email",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: `tr`,
  resources,
});

export default i18n;