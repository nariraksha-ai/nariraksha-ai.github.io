"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Database, HeartHandshake, ArrowRight, Activity, Users, CheckCircle, BarChart3 } from "lucide-react";
import HeatmapCanvas from "@/components/HeatmapCanvas";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("home");

  const whyCards = [
    {
      icon: Eye,
      title: "Environmental Diagnostics",
      desc: "Identifying physical street safety issues like faulty lights, dark alleys, and poor transit access.",
    },
    {
      icon: Database,
      title: "Gender-Responsive Data",
      desc: "Analyzing distinct commuting hours, trip lengths, and routes taken by women to adjust city transit layouts.",
    },
    {
      icon: HeartHandshake,
      title: "Civic Co-Creation",
      desc: "Fusing citizen reporting with urban analytics to design actionable, crowd-sourced safety corridors.",
    },
  ];

  const trustCards = [
    {
      title: "Absolute Anonymity",
      desc: "No personal names, locations, or travel history are ever stored. Reports are completely randomized and aggregated.",
    },
    {
      title: "No Surveillance",
      desc: "We do not run facial recognition or real-time camera tracking. Our AI focuses on infrastructure and community ratings.",
    },
    {
      title: "Explainable Models",
      desc: "Every safety rating we produce outlines the direct physical factors (like streetlights) influencing it.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center border-b border-border bg-[#0B1020] px-4 py-20 text-center">
        {/* Animated Heatmap / Grid Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <HeatmapCanvas />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 mb-6"
          >
            <Activity className="h-4 w-4 animate-pulse" />
            <span>Gender-Responsive AI Initiative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl font-extrabold tracking-tight sm:text-7xl mb-6"
          >
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-teal-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.3)] dark:drop-shadow-[0_0_25px_rgba(192,132,252,0.2)]">
              {t("heroTitle")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-sans"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/about`}
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover shadow-lg shadow-violet-600/20 hover:shadow-violet-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t("exploreButton")}
            </Link>
            <Link
              href={`/${locale}/community`}
              className="px-8 py-3.5 rounded-xl border border-border bg-card/40 hover:bg-muted text-foreground font-semibold backdrop-blur-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t("shareExperienceButton")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats / Why Safety Matters Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              {t("whyMattersTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("whyMattersDesc")}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-pink-500 rounded"></div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: t("stat1Num"), text: t("stat1Text") },
              { num: t("stat2Num"), text: t("stat2Text") },
              { num: t("stat3Num"), text: t("stat3Text") },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md flex flex-col justify-center text-center shadow-2xl shadow-violet-900/20 transition-transform hover:-translate-y-1">
                <span className="font-heading text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
                  {stat.num}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-3">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Why Cards */}
      <section className="py-20 bg-card/20 border-y border-border px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t("howWorksTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("howWorksSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md hover:border-violet-500/40 transition-all hover:shadow-2xl hover:shadow-violet-600/20 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex p-3 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Vision Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("impactVisionTitle")}
          </h2>
          <p className="text-muted-foreground">
            {t("impactVisionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Inclusive Urban Spaces",
              desc: "Building a foundation for lighting grids and walking pavements that directly support low-income night-shift commuters.",
              icon: Users,
            },
            {
              title: "Data-Driven Policymaking",
              desc: "Providing local municipal agencies with structured, empirical data to prioritize city development budgets.",
              icon: BarChart3,
            },
            {
              title: "Safer Transit Routes",
              desc: "Optimizing police patrolling maps, local bus schedules, and shuttle stops based on women's feedback trends.",
              icon: CheckCircle,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/80 transition-colors shadow-xl shadow-black/20">
                <div className="flex-shrink-0">
                  <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-500">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust and Transparency Section */}
      <section className="py-20 bg-card/20 border-t border-border px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t("trustTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("trustSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md shadow-xl shadow-black/20 flex flex-col gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-1.5 h-6 bg-accent rounded"></div>
                <h3 className="font-heading text-lg font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/transparency`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
            >
              Learn more about our AI safety ethics
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback CTA Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden bg-gradient-to-b from-[#0B1020] to-[#12182F] border-t border-border">
        {/* Floating gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            {t("feedbackTitle")}
          </h2>
          <p className="text-slate-300 max-w-lg leading-relaxed">
            {t("feedbackSubtitle")}
          </p>
          <Link
            href={`/${locale}/community`}
            className="mt-4 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/95 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {t("feedbackBtn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
