"use client";

import { useTranslations } from "next-intl";
import { use } from "react";
import { motion } from "framer-motion";
import { Map, Clock, Navigation } from "lucide-react";

export default function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("storiesPage");

  const stories = [
    {
      title: t("journey1Title"),
      sub: t("journey1Sub"),
      desc: t("journey1Desc"),
      color: "violet",
      time: "23:30",
    },
    {
      title: t("journey2Title"),
      sub: t("journey2Sub"),
      desc: t("journey2Desc"),
      color: "pink",
      time: "19:15",
    },
    {
      title: t("journey3Title"),
      sub: t("journey3Sub"),
      desc: t("journey3Desc"),
      color: "teal",
      time: "04:30",
    },
  ];

  return (
    <div className="flex flex-col w-full py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24 mt-8">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-16">
        {stories.map((story, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 w-full">
                <div className={`p-8 rounded-3xl border border-${story.color}-500/20 bg-${story.color}-500/5 backdrop-blur-sm relative overflow-hidden group`}>
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${story.color}-500/10 rounded-full blur-2xl`}></div>
                  
                  <div className="flex items-center gap-2 mb-6 text-sm font-bold tracking-wider uppercase text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{story.time}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-2">{story.title}</h3>
                  <h4 className={`text-sm font-semibold mb-6 text-${story.color}-500`}>{story.sub}</h4>
                  
                  <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                    {story.desc}
                  </p>

                  <button className={`flex items-center gap-2 text-sm font-bold text-${story.color}-500 hover:text-${story.color}-400 transition-colors group cursor-pointer`}>
                    <Navigation className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {t("interactiveLabel")}
                  </button>
                </div>
              </div>

              {/* Decorative map element */}
              <div className="flex-1 w-full hidden md:flex justify-center">
                <div className={`w-48 h-48 rounded-full border border-${story.color}-500/30 flex items-center justify-center relative`}>
                  <div className={`absolute inset-4 rounded-full border border-${story.color}-500/20 border-dashed animate-[spin_20s_linear_infinite]`}></div>
                  <div className={`absolute inset-8 rounded-full border border-${story.color}-500/10 animate-[spin_15s_linear_infinite_reverse]`}></div>
                  <div className={`p-4 rounded-full bg-${story.color}-500/10 text-${story.color}-500`}>
                    <Map className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
