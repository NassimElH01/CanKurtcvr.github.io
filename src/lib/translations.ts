export type Language = "da" | "en";

export const translations = {
  da: {
    heroTitle: "Digital transformation MSc student • PMO / Data & AI / Business-Technology bridge",
    heroQuote: '"Forbinder forretning, data og teknologi i praksis."',
    heroAvailability: "Søger studiejob, deltidsjob eller freelanceopgaver",
    location: "København",
    contactButton: "Kontakt",
    printButton: "Hent / Print CV",
    tabs: {
      cv: "Mit CV",
      projects: "Projekter",
      games: "Spil & Arcade",
      weather: "Vejret",
      news: "Nyheder"
    },
    sectionTitles: {
      cv: "Erfaring & Uddannelsesforløb",
      cvDescription:
        "Ambitiøs profil med fokus på digital transformation, PMO, datadrevne beslutninger og teknologi-forretning integration.",
      printCv: "Hent / Print CV (PDF)",
      skills: "Faglige Kompetencer & Værktøjer",
      skillsIntro:
        "Et overblik over min tekniske værktøjskasse, analytiske profil og forretningsforståelse.",
      academic: "Akademisk fundament & professionel positionering",
      projects: "Projekter & Tekniske Showcases",
      projectsIntro:
        "Udforsk mine tekniske og strategiske projekter inden for digital transformation, BI, cyber og webudvikling."
    },
    contactDialog: {
      title: "Lad os tage en uforpligtende snak",
      description:
        "Jeg er interesseret i muligheder inden for PMO, digital transformation, data og BI, projektlevering og forretnings-technology enablement.",
      email: "Email",
      phone: "Telefon",
      sendMail: "Send mail",
      call: "Ring op",
      linkedin: "LinkedIn profil",
      github: "GitHub profil",
      response: "Svarer typisk inden for 24 timer"
    },
    footer: "MSc Digital Transformation student · Roskilde University"
  },
  en: {
    heroTitle: "Digital transformation MSc student • PMO / Data & AI / Business-Technology bridge",
    heroQuote: '"Connecting business, data, and technology in practice."',
    heroAvailability: "Open to student jobs, part-time roles, or freelance work",
    location: "Copenhagen",
    contactButton: "Contact",
    printButton: "Download / Print CV",
    tabs: {
      cv: "My CV",
      projects: "Projects",
      games: "Games & Arcade",
      weather: "Weather",
      news: "News"
    },
    sectionTitles: {
      cv: "Experience & Education",
      cvDescription:
        "Ambitious profile focused on digital transformation, PMO, data-driven decision support, and business-technology integration.",
      printCv: "Download / Print CV (PDF)",
      skills: "Skills & Tools",
      skillsIntro:
        "Overview of my technical toolkit, analytical profile, and business understanding.",
      academic: "Academic foundation & professional positioning",
      projects: "Projects & Technical Showcases",
      projectsIntro:
        "Explore my technical and strategic projects in digital transformation, BI, cybersecurity, and web development."
    },
    contactDialog: {
      title: "Let’s have a quick conversation",
      description:
        "I’m interested in opportunities around PMO, digital transformation, data and BI, project delivery, and business-technology enablement.",
      email: "Email",
      phone: "Phone",
      sendMail: "Send email",
      call: "Call",
      linkedin: "LinkedIn profile",
      github: "GitHub profile",
      response: "Typically replies within 24 hours"
    },
    footer: "MSc Digital Transformation student · Roskilde University"
  }
} as const;

export const getLanguageLabel = (lang: Language) => (lang === "da" ? "DA" : "EN");
