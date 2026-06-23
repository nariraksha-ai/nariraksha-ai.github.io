"use client";

import { useTranslations } from "next-intl";
import { use } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, HeartHandshake, Award, Calendar, Compass, Target } from "lucide-react";

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("about");

  const milestones = [
    {
      year: "2024",
      title: "Initiative Founded",
      desc: "NariRaksha was formed in response to critical gaps identified in night-time public transportation routes for female workers.",
    },
    {
      year: "2025",
      title: "Pilot City Deployments",
      desc: "Successfully integrated street diagnostics and community reports across three major municipal sectors, mapping over 50,000 commutes.",
    },
    {
      year: "2026",
      title: "Multilingual Scaling",
      desc: "Launched support in 6 regional languages to bring data-driven safety planning to grassroots levels across more urban centers.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm flex flex-col gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 rounded-full blur-xl"></div>
          <div className="p-3 rounded-xl bg-violet-600/10 text-violet-500 w-fit">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold">{t("missionTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("missionDesc")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm flex flex-col gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-600/10 rounded-full blur-xl"></div>
          <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500 w-fit">
            <Compass className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold">{t("visionTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("visionDesc")}</p>
        </motion.div>
      </div>

      {/* Why We Exist */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-card/20 rounded-3xl border border-border p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            {t("whyExistsTitle")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-600 to-pink-500 rounded"></div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t("whyExistsDesc")}
          </p>
        </div>
      </section>

      {/* Responsible AI Principles */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-3">
            {t("principlesTitle")}
          </h2>
          <p className="text-muted-foreground">
            Our framework ensuring AI is a force for public benefit and inclusion.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: t("p1Title"), desc: t("p1Desc"), icon: Shield },
            { title: t("p2Title"), desc: t("p2Desc"), icon: HeartHandshake },
            { title: t("p3Title"), desc: t("p3Desc"), icon: Eye },
          ].map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={i}
                className="p-6 rounded-2xl border border-border bg-card/30 flex flex-col gap-4 hover:border-violet-500/20 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-500 w-fit">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="mb-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-3">
            {t("timelineTitle")}
          </h2>
        </div>

        <div className="relative border-l border-border max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              {/* Timeline bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 p-1 rounded-full bg-background border-2 border-primary text-primary">
                <Calendar className="h-3.5 w-3.5" />
              </div>
              
              <div className="flex flex-col gap-2 p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {m.year}
                </span>
                <h3 className="font-heading text-xl font-bold">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
