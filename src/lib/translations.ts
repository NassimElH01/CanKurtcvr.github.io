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
    cvSection: {
      title: "Erfaring & Uddannelsesforløb",
      description: "Ambitiøs profil med en stærk og alsidig baggrund inden for IT, dataanalyse og formidling. Klik på et kort for at se detaljer, eller hent det komplette CV som PDF.",
      print: "Hent / Print CV (PDF)",
      all: "Alle",
      it: "IT & Digitalisering",
      education: "Uddannelse",
      care: "Omsorg & Formidling"
    },
    projectsSection: {
      title: "Projekter & Tekniske Showcases",
      description: "Udforsk mine interaktive løsninger inden for freelance webudvikling, digital transformation, data, AI og moderne webapplikationer.",
      all: "Alle",
      interactive: "Interaktiv",
      featured: "Fremhævet",
      highlights: "Tekniske højdepunkter:",
      github: "Se kildekode på GitHub",
      openDemo: "Åbn interaktiv demo"
    },
    weatherSection: {
      title: "Vejret i København",
      subtitle: "Live data fra Open-Meteo API",
      refresh: "Opdater",
      current: "Aktuel temperatur",
      forecast: "5-dages vejrudsigt",
      error: "Vejrdata kunne ikke indlæses"
    },
    gamesSection: {
      title: "Vælg dit spil",
      description: "Vælg en kort udfordring, eller gå på opdagelse i Ascension Cards.",
      back: "Tilbage til spil",
      play: "Spil nu →"
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
    cvSection: {
      title: "Experience & Education",
      description: "Ambitious profile with a broad background in IT, data analysis, and communication. Select a card for details, or download the complete CV as a PDF.",
      print: "Download / Print CV (PDF)",
      all: "All",
      it: "IT & Digitalisation",
      education: "Education",
      care: "Care & Communication"
    },
    projectsSection: {
      title: "Projects & Technical Showcases",
      description: "Explore my interactive solutions across freelance web development, digital transformation, data, AI, and modern web applications.",
      all: "All",
      interactive: "Interactive",
      featured: "Featured",
      highlights: "Technical highlights:",
      github: "View source on GitHub",
      openDemo: "Open interactive demo"
    },
    weatherSection: {
      title: "Weather in Copenhagen",
      subtitle: "Live data from the Open-Meteo API",
      refresh: "Refresh",
      current: "Current temperature",
      forecast: "5-day forecast",
      error: "Could not load weather data"
    },
    gamesSection: {
      title: "Choose your game",
      description: "Pick a short challenge or explore Ascension Cards.",
      back: "Back to games",
      play: "Play now →"
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
