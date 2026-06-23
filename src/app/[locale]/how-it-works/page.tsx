"use client";

import { useTranslations } from "next-intl";
import { use } from "react";
import { motion } from "framer-motion";
import { Map, ShieldAlert, Users, LayoutDashboard, Sparkles, MapPin, Eye, CheckCircle } from "lucide-react";

export default function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("howWorks");

  const steps = [
    {
      step: 1,
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: Map,
      color: "from-violet-600 to-indigo-600",
      accent: "text-violet-400",
      bgLight: "bg-violet-500/10",
      graphic: (
        <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
          {/* Mock Grid Map */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
          {/* Animated Route Node */}
          <div className="relative flex flex-col items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-violet-500 animate-ping absolute"></div>
            <div className="w-4 h-4 rounded-full bg-violet-500 relative z-10 flex items-center justify-center">
              <MapPin className="h-2 w-2 text-white" />
            </div>
            <div className="px-2 py-1 rounded bg-violet-500/20 border border-violet-500/30 text-[10px] font-bold text-violet-400 relative z-10">
              Mapping Streetlights
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      title: t("step2Title"),
      desc: t("step2Desc"),
      icon: ShieldAlert,
      color: "from-pink-600 to-rose-600",
      accent: "text-pink-400",
      bgLight: "bg-pink-500/10",
      graphic: (
        <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden gap-2">
          {/* Risk meters */}
          <div className="w-full space-y-2">
            {[
              { label: "Transit Connectivity", value: 30, color: "bg-emerald-500" },
              { label: "Street Lighting Index", value: 85, color: "bg-rose-500" },
              { label: "Pedestrian Volume", value: 15, color: "bg-rose-500" },
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[9px] font-semibold text-slate-400">
                  <span>{bar.label}</span>
                  <span>{bar.value > 50 ? "Risk High" : "Secure"}</span>
                </div>
                <div className="w-full h-2 rounded bg-slate-800 overflow-hidden">
                  <div className={`h-full ${bar.color}`} style={{ width: `${bar.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      step: 3,
      title: t("step3Title"),
      desc: t("step3Desc"),
      icon: Users,
      color: "from-teal-600 to-emerald-600",
      accent: "text-teal-400",
      bgLight: "bg-teal-500/10",
      graphic: (
        <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden gap-3">
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 max-w-xs w-full">
            <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></div>
            <div className="text-[10px] font-medium text-teal-400">
              Anonymous Report: Faulty bulb on Lane 4
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800 border border-slate-700 max-w-xs w-full opacity-60">
            <div className="h-2 w-2 rounded-full bg-slate-500"></div>
            <div className="text-[10px] font-medium text-slate-300">
              Community Rating: 2/5 (Unsafe path)
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 4,
      title: t("step4Title"),
      desc: t("step4Desc"),
      icon: LayoutDashboard,
      color: "from-blue-600 to-indigo-600",
      accent: "text-blue-400",
      bgLight: "bg-blue-500/10",
      graphic: (
        <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between p-4 overflow-hidden">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Decision Dashboard
          </div>
          <div className="flex gap-2 items-end justify-center py-2">
            {[40, 75, 50, 95, 30].map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-6 bg-blue-500/20 rounded-t border-t border-blue-500" style={{ height: `${val * 0.8}px` }}></div>
                <span className="text-[8px] text-slate-500">Zone {i + 1}</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] font-semibold text-emerald-400 flex items-center justify-center gap-1">
            <Eye className="h-3 w-3" /> Patrol routes updated
          </div>
        </div>
      ),
    },
    {
      step: 5,
      title: t("step5Title"),
      desc: t("step5Desc"),
      icon: Sparkles,
      color: "from-violet-600 to-pink-600",
      accent: "text-violet-400",
      bgLight: "bg-violet-500/10",
      graphic: (
        <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden text-center gap-2">
          <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500 animate-bounce">
            <CheckCircle className="h-8 w-8" />
          </div>
          <div className="text-xs font-bold text-slate-200">Safety Upgrades Applied</div>
          <div className="text-[10px] text-slate-400 max-w-[180px]">
            New lights installed, night patrol active, comfort rating increased by 40%
          </div>
        </div>
      ),
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

      {/* Interactive step process */}
      <div className="relative max-w-5xl mx-auto w-full mb-12">
        {/* Central connecting track line (Desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l border-dashed border-border hidden md:block"></div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row gap-8 items-center relative ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual Step bubble on the track */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B1020] border-2 border-border hidden md:flex items-center justify-center z-10 font-heading font-bold text-sm text-foreground">
                  {step.step}
                </div>

                {/* Left Column (Card Details) */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm flex flex-col gap-4 relative overflow-hidden group hover:border-violet-500/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg ${step.bgLight} ${step.accent}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Spacer representing track center (Desktop only) */}
                <div className="w-12 hidden md:block"></div>

                {/* Right Column (Visual/Interactive Mock Graphic) */}
                <div className="flex-1 w-full max-w-sm md:max-w-none">
                  {step.graphic}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
