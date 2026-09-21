export type CVCategory = "all" | "it" | "uddannelse" | "omsorg";

export interface CVItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "Uddannelse" | "Erfaring" | "Frivilligt arbejde";
  category: "it" | "uddannelse" | "omsorg";
  description: string;
  tags: string[];
  bullets?: string[];
}

export const cvItems: CVItem[] = [
  {
    id: "ruc-master-digital-transformation",
    title: "MSc in Digital Transformation",
    organization: "Roskilde University (RUC)",
    period: "2026 - 2028 (expected)",
    type: "Uddannelse",
    category: "uddannelse",
    description: "Graduate study focused on digital transformation, technology strategy, data and business integration, governance, and organizational change.",
    tags: ["Digital Transformation", "IT Strategy", "RUC", "Leadership"],
    bullets: [
      "Exploring digital transformation in complex organizations with focus on strategy, governance, and technology adoption.",
      "Developing a bridge between business needs, process change, and digital capability building.",
      "Strengthening analytical and strategic thinking within an IT and business context."
    ]
  },
  {
    id: "zealand-professionsbachelor",
    title: "Professionsbachelor i Økonomi & IT",
    organization: "Zealand – Sjællands Erhvervsuddannelser",
    period: "2022 - 2026",
    type: "Uddannelse",
    category: "uddannelse",
    description: "Applied business and IT degree combining business processes, digitalization, project management, cybersecurity, and data analysis.",
    tags: ["Økonomi", "IT", "Dataanalyse", "Cybersecurity", "Projektledelse"],
    bullets: [
      "Built strong foundations in process optimization, digital tools, and technology-enabled business operations.",
      "Worked with business analysis, data-driven decision-making, and practical system understanding.",
      "Combined technical and commercial thinking through project work and applied study assignments."
    ]
  },
  {
    id: "royal-unibrew-pmo",
    title: "Junior Project Manager / PMO Intern",
    organization: "Royal Unibrew",
    period: "2025",
    type: "Erfaring",
    category: "it",
    description: "Supported cross-functional IT/OT and cybersecurity projects with governance, stakeholder coordination, reporting, and Power BI-driven project insight.",
    tags: ["Project Management", "PMO", "Power BI", "Azure DevOps", "Stakeholder Management"],
    bullets: [
      "Coordinated project reporting, meeting structure, and stakeholder communication across technology and operations teams.",
      "Worked with Azure DevOps governance, project tracking, and process improvement for digital initiatives.",
      "Created Power BI dashboards and project reporting from ProjectFlow to improve transparency and business follow-up."
    ]
  },
  {
    id: "zealand-it-student-assistant",
    title: "IT Medarbejder / Student Assistant",
    organization: "Zealand IT",
    period: "2025 - 2026",
    type: "Erfaring",
    category: "it",
    description: "Delivered user support, digital systems operations, and documentation support across Microsoft 365 and administrative IT processes.",
    tags: ["IT Support", "Microsoft 365", "Documentation", "Digital Systems"],
    bullets: [
      "Provided day-to-day IT support and troubleshooting for staff and users across digital systems.",
      "Maintained documentation, procedural support, and efficient handling of internal digital workflows.",
      "Contributed to the smooth operation of Microsoft 365 and shared business tools in a practical support environment."
    ]
  },
  {
    id: "ss-rengoringservice",
    title: "Rengøringsmedarbejder",
    organization: "S&S Rengøringservice",
    period: "Tidligere erfaring",
    type: "Erfaring",
    category: "omsorg",
    description: "Praktisk servicearbejde med fokus på kvalitet, ansvarlighed, struktur og en professionel oplevelse for kunder.",
    tags: ["Service", "Kvalitet", "Ansvarlighed", "Struktur"],
    bullets: [
      "Leverede stabil og grundig service med fokus på kvalitet og kundetilfredshed.",
      "Planlagde og gennemførte opgaver selvstændigt med sans for detaljer og effektivitet."
    ]
  },
  {
    id: "badr-fight-club",
    title: "Medarbejder",
    organization: "Badr Fight Club",
    period: "Tidligere erfaring",
    type: "Erfaring",
    category: "omsorg",
    description: "Erfaring fra et aktivt klubmiljø med fokus på samarbejde, disciplin, kommunikation og ansvar.",
    tags: ["Samarbejde", "Kommunikation", "Disciplin", "Ansvar"],
    bullets: [
      "Bidrog til et positivt og struktureret miljø for medlemmer og aktiviteter.",
      "Udviklede stærke samarbejds- og kommunikationsevner i en social og dynamisk hverdag."
    ]
  },
  {
    id: "royal-unibrew-bachelor-project",
    title: "Bachelorprojekt: OT Cyber Security & Data-Driven Project Management",
    organization: "Royal Unibrew",
    period: "2025 - 2026",
    type: "Erfaring",
    category: "it",
    description: "Bachelor project exploring OT cybersecurity and data-driven project management in a production-focused industrial setting.",
    tags: ["Cybersecurity", "OT", "Data-driven PM", "Industrial IT"],
    bullets: [
      "Examined cyber risk and governance in operational technology environments alongside digital transformation initiatives.",
      "Connected project management practice with data and reporting to improve decision support in complex operations.",
      "Produced an applied research project linking security, process thinking, and digital programme management."
    ]
  },
  {
    id: "volunteer-fire-watch",
    title: "Volunteer Fire Watch",
    organization: "CNS Security",
    period: "Selected experience",
    type: "Frivilligt arbejde",
    category: "omsorg",
    description: "Volunteer support in a safety-focused environment requiring vigilance, coordination, and professionalism under operational conditions.",
    tags: ["Safety", "Coordination", "Responsibility"],
    bullets: [
      "Supported fire watch and safety monitoring tasks in a structured operational setting.",
      "Maintained focus, communication, and situational awareness in high-responsibility environments."
    ]
  },
  {
    id: "carecompagniet-contact",
    title: "Contact Person / Supporting Role",
    organization: "CareCompagniet",
    period: "Selected experience",
    type: "Frivilligt arbejde",
    category: "omsorg",
    description: "Supportive contact role focused on communication, trust, and practical coordination in a care-oriented setting.",
    tags: ["Communication", "Care", "Trust"],
    bullets: [
      "Acted as a reliable point of contact for people needing guidance, coordination, and practical support.",
      "Built strong interpersonal communication and empathy in care-related situations."
    ]
  }
];

export function getCVItemById(id: string): CVItem | undefined {
  return cvItems.find((item) => item.id === id);
}
