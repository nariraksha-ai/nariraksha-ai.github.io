"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Handshake, MapPin, Globe, Award } from "lucide-react";

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("contactPage");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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

      {/* Global Recognition Banner */}
      <div className="max-w-6xl mx-auto w-full mb-12">
        <div className="p-8 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-md shadow-2xl shadow-amber-900/20 relative overflow-hidden group hover:border-amber-400/50 transition-all">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start relative z-10">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-black/50 shrink-0 relative group-hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              <img src="/images/vikhram-contact.jpg" alt="Vikhram S at India AI Impact Summit" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 text-center lg:text-left flex-1">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-1">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20 flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" />
                  Global Recognition
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent leading-tight">
                India AI Impact Summit 2026
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-200">
                Lead Author: "NariRaksha: Gender-Responsive AI for Women's Safety"
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Published in the highly prestigious <strong className="text-slate-100">Casebook on AI and Gender Empowerment</strong>, a joint initiative by the <strong className="text-slate-100">Ministry of Electronics and Information Technology (MeitY), Government of India, and UN Women</strong>. Selected from over <strong className="text-amber-400">235 global submissions</strong> following a rigorous multi-stage technical screening, NariRaksha is honored to be among the <strong className="text-amber-400">top 23 elite AI applications</strong> featured.
              </p>
              <div className="p-5 mt-2 rounded-2xl bg-slate-900/80 border border-slate-700/50 shadow-inner relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "At the launch event, I had the profound honor of being recognized by <strong className="text-slate-100 font-semibold not-italic">Ms. Sudeshna Mukherjee</strong>—Head of Communications for Gender, Climate and AI—who acknowledged my chapter and personally presented me with a hard copy of the casebook."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto w-full">
        {/* Contact Information & Collaboration */}
        <div className="lg:col-span-5 flex flex-col gap-8">

          {/* Founder Profile */}
          <div className="p-8 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-violet-900/20 relative overflow-hidden group hover:border-violet-500/40 transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 rounded-full blur-3xl group-hover:bg-pink-600/20 transition-colors pointer-events-none"></div>

            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 relative z-10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-xl shadow-black/40 shrink-0">
                <img src="/images/vikhram-contact.jpg" alt="Vikhram S" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <h3 className="font-heading text-xl font-extrabold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Vikhram S</h3>
                <p className="text-sm font-semibold text-slate-300">Founder & Core Developer</p>
                <div className="flex flex-col gap-2 mt-3">
                  <a href="mailto:vikhramselvacumaran@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-slate-400 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" /> vikhramselvacumaran@gmail.com
                  </a>
                  <a href="https://vikhram-s.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-slate-400 hover:text-primary transition-colors">
                    <Globe className="h-4 w-4" /> vikhram-s.github.io/
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-violet-900/20 relative overflow-hidden group hover:border-violet-500/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl group-hover:bg-violet-600/20 transition-colors pointer-events-none"></div>

            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 w-fit mb-6">
              <Handshake className="h-6 w-6" />
            </div>

            <h2 className="font-heading text-2xl font-bold mb-3 text-slate-100">{t("collaboration")}</h2>
            <p className="text-slate-400 leading-relaxed font-sans mb-8">
              {t("collaborationDesc")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <Mail className="h-5 w-5 text-slate-500" />
                vikhramselvacumaran@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <Mail className="h-5 w-5 text-slate-500" />
                vikhrams@saveetha.ac.in
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card/40 backdrop-blur-sm relative">
            {formSubmitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300 h-full min-h-[400px]">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t("successMsg")} We will get back to you within 24-48 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 px-6 py-2.5 rounded-xl border border-border bg-card hover:bg-muted font-semibold transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {t("formName")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {t("formEmail")}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t("formSubject")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t("formMessage")}
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover shadow-lg shadow-violet-600/10 hover:shadow-violet-600/20 transition-all cursor-pointer"
                >
                  <Send className="h-5 w-5" />
                  {t("formSubmit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
