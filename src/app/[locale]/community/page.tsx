"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";
import { Shield, Send, CheckCircle, HelpCircle, Users, Award, Briefcase, GraduationCap, Heart, Home } from "lucide-react";

export default function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("communityPage");

  const [activeRole, setActiveRole] = useState<string>("Women");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    commuteType: "Public Bus",
    issue: "Streetlights are completely off",
    location: "Metro Junction Sector 4",
    additionalInfo: "",
  });

  const roles = [
    { name: "Women", title: t("a1Title"), desc: t("a1Desc"), icon: Heart },
    { name: "Students", title: t("a2Title"), desc: t("a2Desc"), icon: GraduationCap },
    { name: "Parents", title: t("a3Title"), desc: t("a3Desc"), icon: Home },
    { name: "Working Professionals", title: t("a4Title"), desc: t("a4Desc"), icon: Briefcase },
    { name: "NGOs", title: t("a5Title"), desc: t("a5Desc"), icon: Award },
    { name: "Local Communities", title: t("a6Title"), desc: t("a6Desc"), icon: Users },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Community Report Details:\n\nCommute Type: ${formData.commuteType}\nPrimary Issue: ${formData.issue}\nLocation: ${formData.location}\nAdditional Context: ${formData.additionalInfo}\n\nPlease add this to the NariRaksha database.`;
    window.location.href = `mailto:vikhramselvacumaran@gmail.com,vikhrams@saveetha.ac.in?subject=New NariRaksha Community Report&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      commuteType: "Public Bus",
      issue: "Streetlights are completely off",
      location: "Metro Junction Sector 4",
      additionalInfo: "",
    });
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

      {/* Role Selection / Who We Serve */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold">{t("audienceTitle")}</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Select a group to see how NariRaksha helps them co-create safer corridors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = activeRole === role.name;

            return (
              <button
                key={role.name}
                onClick={() => setActiveRole(role.name)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-center transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-violet-600/10"
                    : "bg-card/40 border-border hover:bg-muted text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-semibold">{role.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Card */}
        {activeRole && (
          <div className="p-8 rounded-2xl border border-border bg-card/20 backdrop-blur-sm max-w-3xl mx-auto flex flex-col gap-4 text-center items-center">
            <h3 className="font-heading text-xl font-bold">
              {roles.find((r) => r.name === activeRole)?.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              {roles.find((r) => r.name === activeRole)?.desc}
            </p>
          </div>
        )}
      </section>

      {/* Feedback Portal / Form */}
      <section className="max-w-2xl mx-auto w-full mb-12">
        <div className="p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-2xl font-bold">{t("feedbackHeader")}</h2>
          </div>

          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6 flex gap-2.5 items-center">
            <HelpCircle className="h-4.5 w-4.5 shrink-0" />
            <span>This survey is completely anonymous. Your IP and account identifier are not recorded.</span>
          </div>

          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center gap-4 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Feedback Submitted</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Your report has been received anonymously and added to the NariRaksha city heatmap database. Urban safety coordinators will be notified.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-sm font-semibold transition-all cursor-pointer"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Mode of Commute
                </label>
                <select
                  value={formData.commuteType}
                  onChange={(e) => setFormData({ ...formData, commuteType: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                >
                  <option>Public Bus</option>
                  <option>Metro / Train</option>
                  <option>Auto Rickshaw / Taxi</option>
                  <option>Walking</option>
                  <option>Bicycle</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Primary Safety Issue
                </label>
                <select
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                >
                  <option>Streetlights are completely off</option>
                  <option>Faulty lighting / dark shadows</option>
                  <option>Isolated / dark transit stop</option>
                  <option>Lack of walking pathway / sidewalk</option>
                  <option>Harassment hotspot</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location Details (Street / Junction / Station Name)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sector 5 Bus Station lane"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Additional Context (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide any details about timing, comfort level, etc."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover shadow-lg shadow-violet-600/10 hover:shadow-violet-600/20 transition-all cursor-pointer mt-2"
              >
                <Send className="h-4 w-4" />
                Submit Anonymous Report
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
