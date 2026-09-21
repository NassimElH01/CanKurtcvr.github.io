import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cpu, Languages, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface SkillCategory {
  title: string;
  icon: typeof Code2;
  description: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "PMO & Projektledelse",
    icon: Code2,
    color: "text-blue-500",
    description: "Project coordination, governance, reporting, and stakeholder-driven execution.",
    skills: [
      "PRINCE2 Foundation & Practitioner",
      "Agile Project Management",
      "Stakeholder Management",
      "Azure DevOps Governance",
      "Reporting & Dashboarding",
      "Project Coordination",
      "Change & Process Support"
    ]
  },
  {
    title: "Data, BI & Analyse",
    icon: Database,
    color: "text-emerald-500",
    description: "Turning data into decisions through analysis, dashboards, and business insight.",
    skills: [
      "Power BI",
      "Data Analysis",
      "BI & KPI reporting",
      "Excel Modelling",
      "ProjectFlow Reporting",
      "Data-driven Decision Support",
      "Process Visualization"
    ]
  },
  {
    title: "Digitalisering & AI",
    icon: Cpu,
    color: "text-amber-500",
    description: "Digital transformation and business-technology alignment with a practical AI lens.",
    skills: [
      "Digital Transformation",
      "AI & Generative AI",
      "Technology Strategy",
      "Business & IT Alignment",
      "Process Optimization",
      "Cybersecurity",
      "IT Governance"
    ]
  },
  {
    title: "Sprog & Kommunikation",
    icon: Languages,
    color: "text-purple-500",
    description: "Clear communication, cross-cultural collaboration, and service mindset.",
    skills: [
      "Danish (Native)",
      "English (Fluent)",
      "Arabic (Fluent)",
      "German (Working proficiency)",
      "Professional Communication",
      "Stakeholder Engagement",
      "Documentation & Presentation"
    ]
  }
];

export default function SkillsSection() {
  return (
    <div className="mb-12 space-y-6">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h3 className="text-2xl font-display font-bold text-foreground">
          Faglige Kompetencer & Værktøjer
        </h3>
        <p className="text-sm text-muted-foreground">
          Et overblik over min tekniske værktøjskasse, analytiske profil og forretningsforståelse.
        </p>
      </div>

      {/* Akademisk IT-Uddannelsesfundament */}
      <div className="p-4 md:p-5 rounded-xl border border-primary/25 bg-primary/5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground font-semibold text-sm md:text-base">
            <div className="p-1.5 rounded-md bg-primary/15 text-primary">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>Academic foundation & professional positioning</span>
          </div>
          <Badge variant="outline" className="border-primary/40 text-primary text-xs font-semibold">
            RUC & Zealand
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-lg bg-background/80 border border-border/60 space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-foreground">MSc Digital Transformation</span>
              <span className="text-[11px] font-mono text-muted-foreground">2026 - 2028</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Roskilde University (RUC) — Focus on digital transformation, technology strategy, and change-led business development.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-background/80 border border-border/60 space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-foreground">Professionsbachelor i Økonomi & IT</span>
              <span className="text-[11px] font-mono text-muted-foreground">2022 - 2026</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zealand – practical business and IT education combining economics, project work, data analysis, and digital systems.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="hover:border-primary/40 transition-colors shadow-xs">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted">
                    <Icon className={`w-4 h-4 ${category.color}`} />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-slate-100 dark:bg-slate-800/80 text-foreground/90 font-medium px-2.5 py-1 rounded-md border border-border/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
