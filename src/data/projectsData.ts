export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  actionText?: string;
  demoId?: "debt-simulator" | "process-visualizer" | "compliance-inspector";
  gameId?: string;
  href?: string;
  downloadUrl?: string;
  githubUrl?: string;
  iconName: "TrendingDown" | "Workflow" | "Scale" | "Sparkles" | "Eye" | "Box" | "FileSpreadsheet" | "Gamepad2";
  iconColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "24support-julekalender",
    title: "24Support Julekalender 2026",
    shortTitle: "Interaktiv julekalender",
    category: "Freelance & Webudvikling",
    description: "En komplet digital julekalender udviklet som en selvstændig HTML/CSS/JavaScript-løsning for 24Support med 24 interaktive låger, dansk datostyring, keyboard-navigation og et separat administratormodul til opdatering af spørgsmål.",
    tags: ["Freelance", "HTML", "CSS", "JavaScript", "Accessibility", "Responsive Design"],
    highlights: [
      "Designede en skalerbar 16:9-oplevelse med danske byhuse, animationer, snefald og interaktioner",
      "Implementerede dato- og localStorage-logik, så låger åbner korrekt og huskes pr. bruger",
      "Leverede et lokalt admin-værktøj, der genererer den offentlige kalenderfil uden backend"
    ],
    actionText: "Åbn julekalender",
    href: "/freelance/24support-julekalender/julekalender.html",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Sparkles",
    iconColor: "text-red-500"
  },
  {
    id: "ss-rengoringservice-website",
    title: "S&S Rengøringsservice Website",
    shortTitle: "S&S hjemmeside",
    category: "Freelance & Webudvikling",
    description: "Freelance webarbejde for S&S Rengøringsservice med fokus på en enkel, professionel og mobilvenlig hjemmeside, der præsenterer virksomhedens serviceydelser tydeligt.",
    tags: ["Freelance", "Webdesign", "HTML/CSS", "Responsive Design", "Business Website"],
    highlights: [
      "Omsatte virksomhedens behov til en klar og serviceorienteret webstruktur",
      "Arbejdede med visuel præsentation, indhold og en mobilvenlig brugeroplevelse",
      "Forbandt virksomhedens serviceprofil med en mere professionel digital tilstedeværelse"
    ],
    actionText: "Se projektprofil",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Workflow",
    iconColor: "text-emerald-500"
  },
  {
    id: "royal-unibrew-project",
    title: "Royal Unibrew OT Cyber Security & Data-Driven PMO",
    shortTitle: "OT Security & PMO Case",
    category: "Digital Transformation",
    description: "Bachelor project focused on OT cybersecurity and data-driven project management in an industrial environment, combining operational security with governance and stakeholder-oriented reporting.",
    tags: ["Cybersecurity", "OT", "PMO", "Data-driven Management", "Royal Unibrew"],
    highlights: [
      "Analysed OT security risk in a production-oriented business context",
      "Connected project governance with operational reporting and decision support",
      "Produced a research-based digitalisation and security case grounded in real operations"
    ],
    actionText: "Se projektprofil",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Workflow",
    iconColor: "text-blue-500"
  },
  {
    id: "data-integration-visualizer",
    title: "Data Integration & Process Optimization Case",
    shortTitle: "Data Integration & Process Design",
    category: "Digital Transformation",
    description: "Academic assignment focused on business and technology integration, process design, and improved information flow across systems and stakeholders.",
    tags: ["Data Integration", "Business IT", "Process Design", "Stakeholder Alignment"],
    highlights: [
      "Explored how system and process design can improve business value and control",
      "Worked across data flows, governance challenges, and operational needs",
      "Combined project thinking with practical digital transformation frameworks"
    ],
    actionText: "Se case",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Scale",
    iconColor: "text-indigo-500"
  },
  {
    id: "ibm-data-analytics",
    title: "IBM Data Analytics & Cybersecurity Capstone",
    shortTitle: "IBM Data Analytics Project",
    category: "AI & Data Analytics",
    description: "Applied analytics and cybersecurity project work using structured learning and evidence-based decision support across business and technical domains.",
    tags: ["IBM Data Analytics", "Cybersecurity", "Machine Learning", "Data Analysis"],
    highlights: [
      "Applied analytical methods to real-world business and technical datasets",
      "Strengthened skills in data interpretation, reporting, and technical problem solving",
      "Connected data work with security awareness and risk-oriented thinking"
    ],
    actionText: "Se projekt",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Sparkles",
    iconColor: "text-amber-500"
  },
  {
    id: "ascension-cards",
    title: "Ascension Cards — Habit RPG",
    shortTitle: "Ascension Cards (Habit RPG)",
    category: "Full Stack & Web App",
    description: "En fordybende, kortbaseret habit tracker og rollespilsoplevelse bygget med TanStack Start, Nitro og moderne webteknologier. Gør personlig udvikling og daglige rutiner til et spil med samlekort, streaks og XP-progression.",
    tags: ["React 19", "TanStack Start", "Nitro", "Tailwind CSS", "TypeScript", "SSR"],
    highlights: [
      "Arkitektur med TanStack Start & Nitro server engine",
      "Interaktive samlekort med sjældenhedsgrader og dynamisk statistik",
      "Gamification med streaks, quests og inventory-system"
    ],
    actionText: "Udforsk Ascension Cards",
    gameId: "ascension-cards",
    href: "/ascensioncards/",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Sparkles",
    iconColor: "text-amber-500"
  },
  {
    id: "web-shooter",
    title: "Superhero Hand Powers — Browser Computer Vision",
    shortTitle: "Superhero Hand Powers (Vision AI)",
    category: "AI & Computer Vision",
    description: "Real-time gestusgenkendelse direkte via webkameraet uden krav om ekstern backend. Algoritmen genkender håndbevægelser med lav latency til at affyre Spider-Man spindelvæv eller aktivere Wolverine-kløer.",
    tags: ["Computer Vision", "Camera API", "HTML5 Canvas", "WebGL", "MediaPipe"],
    highlights: [
      "100% lokal inferens på klienten (fuldt privatlivsbeskyttende)",
      "Realtids sporing af håndled og fingre i browseren",
      "Dynamisk canvas-rendering synkroniseret med 60 FPS videostream"
    ],
    actionText: "Test kamerastyring live",
    gameId: "web-shooter",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Eye",
    iconColor: "text-rose-500"
  },
  {
    id: "flight-world-3d",
    title: "FlightWorld 3D — Procedural WebGL Simulation",
    shortTitle: "FlightWorld 3D (WebGL Sim)",
    category: "3D Grafik & WebGL",
    description: "Interaktiv 3D-flyvesimulation med Three.js. Indeholder dynamisk tredjepersons kameraføring, svævende procedurale øer, stemningsfulde lyskilder og partikelsystemer optimeret til høj performance.",
    tags: ["Three.js", "WebGL", "3D Matematik", "TypeScript", "Shaders"],
    highlights: [
      "Specialdesignet flyvefysik og jævn kameradæmpning",
      "Procedural placering af 3D-modeller og naturmiljøer",
      "Performance-optimeret renderingloop med frustum culling"
    ],
    actionText: "Se 3D simulation",
    gameId: "ascension-cards",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Box",
    iconColor: "text-cyan-500"
  },
  {
    id: "budget-model",
    title: "Finansiel Budget- & Likviditetsmodel",
    shortTitle: "Finansiel Budgetmodel (Excel)",
    category: "FinTech & Dataanalyse",
    description: "Omfattende økonomistyrings- og budgetmodel udviklet i Microsoft Excel. Designet til datadrevet likviditetsstyring, visualisering af pengestrømme og månedlig opfølgning for både privatøkonomi og mindre virksomheder.",
    tags: ["Excel Modellering", "Datavalidering", "Finansiel Analyse", "KPI Dashboard"],
    highlights: [
      "Automatiserede beregninger af faste omkostninger og rådighedsbeløb",
      "Strukturerede tabeller med indbygget datavalidering mod tastefejl",
      "Visuel oversigt over forbrugsmønstre og opsparingskvoter"
    ],
    actionText: "Hent skabelon (Excel)",
    downloadUrl: "/budget-skabelon.xlsx",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "FileSpreadsheet",
    iconColor: "text-emerald-500"
  },
  {
    id: "arcade-games",
    title: "Canvas Arcade State Machines",
    shortTitle: "Canvas Arcade (TypeScript)",
    category: "Full Stack & Web App",
    description: "En række klassiske arkadespil (Blackjack med casinoregler, Snake med input-kø og collision detection, Pong med vektor-refleksion) bygget fra bunden med ren TypeScript og HTML5 Canvas.",
    tags: ["TypeScript", "Canvas API", "Framer Motion", "State Management"],
    highlights: [
      "Deterministiske spil-loops uafhængige af framerate",
      "Lokale highscore-systemer med localStorage-persistens",
      "Responsive canvas-layouts tilpasset mobil og desktop"
    ],
    actionText: "Gå til spilarkaden",
    gameId: "snake",
    githubUrl: "https://github.com/NassimElH01",
    iconName: "Gamepad2",
    iconColor: "text-purple-500"
  }
];
