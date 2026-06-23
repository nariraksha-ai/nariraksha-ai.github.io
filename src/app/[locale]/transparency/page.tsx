"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Sparkles, UserCheck, EyeOff, Scale, HelpCircle, ChevronDown } from "lucide-react";

export default function TransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("transparency");

  // Accordion states
  const [openSection, setOpenSection] = useState<string | null>("privacy");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const doesItems = [t("doesDesc1"), t("doesDesc2"), t("doesDesc3")];
  const doesNotItems = [t("doesNotDesc1"), t("doesNotDesc2"), t("doesNotDesc3")];

  const accordions = [
    {
      id: "privacy",
      title: t("privacy"),
      desc: t("privacyDesc"),
      icon: EyeOff,
    },
    {
      id: "bias",
      title: t("bias"),
      desc: t("biasDesc"),
      icon: Scale,
    },
    {
      id: "oversight",
      title: t("oversight"),
      desc: t("oversightDesc"),
      icon: UserCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      {/* Comparison Grid (Does vs Does Not Do) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* What AI Does */}
        <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-100 dark:text-slate-100">{t("doesTitle")}</h2>
          </div>
          
          <ul className="space-y-4">
            {doesItems.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What AI Does NOT Do */}
        <div className="p-8 rounded-3xl border-red-500/20 bg-red-500/5 backdrop-blur-sm flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-100 dark:text-slate-100">{t("doesNotTitle")}</h2>
          </div>

          <ul className="space-y-4">
            {doesNotItems.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expandable Policy / Accordion Sections */}
      <section className="max-w-3xl mx-auto w-full mb-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Ethics & Privacy Audits
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Click on any section to understand the architectural design patterns we enforce.
          </p>
        </div>

        <div className="space-y-4">
          {accordions.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;

            return (
              <div
                key={section.id}
                className="rounded-2xl border border-border bg-card/40 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-lg font-bold text-foreground">{section.title}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                      {section.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
