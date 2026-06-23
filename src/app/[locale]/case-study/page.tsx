"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, AlertCircle, Sparkles, Settings, LineChart, MessageSquare, Compass, Eye, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function CaseStudyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("caseStudy");
  const [activeTab, setActiveTab] = useState<"1min" | "3min" | "full">("1min");

  const cards = [
    { title: t("problemTitle"), desc: t("problemDesc"), icon: ShieldAlert, color: "text-red-500 bg-red-500/10 border-red-500/20" },
    { title: t("solutionTitle"), desc: t("solutionDesc"), icon: Sparkles, color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
    { title: t("implementationTitle"), desc: t("implementationDesc"), icon: Settings, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { title: t("impactTitle"), desc: t("impactDesc"), icon: CheckCircle2, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { title: t("lessonsTitle"), desc: t("lessonsDesc"), icon: MessageSquare, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { title: t("futureTitle"), desc: t("futureDesc"), icon: Compass, color: "text-teal-500 bg-teal-500/10 border-teal-500/20" },
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

      {/* Interactive Tabs / Summaries */}
      <section className="mb-20 max-w-4xl mx-auto w-full">
        {/* Tab Switcher */}
        <div className="flex p-1.5 rounded-2xl bg-card border border-border mb-8 max-w-md mx-auto relative z-10">
          {[
            { id: "1min", label: t("duration1") },
            { id: "3min", label: t("duration3") },
            { id: "full", label: t("durationFull") },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer relative ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card/40 backdrop-blur-sm relative overflow-hidden min-h-[220px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <AlertCircle className="h-4 w-4" />
                <span>Selected View: {activeTab === "1min" ? "1-Minute Pitch" : activeTab === "3min" ? "Executive Summary" : "Full Analysis"}</span>
              </div>
              <p className="text-base sm:text-lg text-foreground leading-relaxed font-sans">
                {activeTab === "1min" && t("summary1Text")}
                {activeTab === "3min" && t("summary3Text")}
                {activeTab === "full" && t("summaryFullText")}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border bg-card/30 flex flex-col gap-4 hover:border-violet-500/20 transition-all hover:bg-card/50"
              >
                <div className={`p-3 rounded-xl border w-fit ${card.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Download Area */}
      <section className="p-8 sm:p-12 rounded-3xl border border-border bg-gradient-to-r from-violet-900/10 to-pink-900/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
        {/* Decorative backdrop blobs */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-3 max-w-lg text-center sm:text-left">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Want the complete PDF version?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Download our publication including detailed research, algorithm architectures, data sources, and civic deployment frameworks.
          </p>
        </div>

        <a
          href="/Nariraksha.pdf"
          download="Nariraksha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover shadow-lg shadow-violet-600/10 transition-all cursor-pointer w-full sm:w-auto"
        >
          <FileDown className="h-5 w-5" />
          {t("downloadPdf")}
        </a>
      </section>
    </div>
  );
}
