"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Shield, Mail, ArrowRight, Globe, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      // Using Web3Forms for backend-less database storage and email forwarding (GitHub Pages friendly)
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace this with your actual key
          subject: "NariRaksha Newsletter Subscription",
          from_name: "Newsletter Portal",
          "Subscriber Email": email,
        }),
      });
      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      alert("Failed to subscribe. Please try again later.");
    }
  };

  const quickLinks = [
    { href: `/${locale}`, label: navT("home") },
    { href: `/${locale}/about`, label: navT("about") },
    { href: `/${locale}/how-it-works`, label: navT("howItWorks") },
    { href: `/${locale}/case-study`, label: navT("caseStudy") },
    { href: `/${locale}/transparency`, label: navT("transparency") },
    { href: `/${locale}/community`, label: navT("community") },
    { href: `/${locale}/awareness`, label: navT("awareness") },
    { href: `/${locale}/stories`, label: navT("stories") },
    { href: `/${locale}/contact`, label: navT("contact") },
  ];

  return (
    <footer className="border-t border-border bg-card/50 text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-primary">
              <Shield className="h-6 w-6 text-accent" />
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
                NariRaksha
              </span>
            </Link>
            <p className="text-sm font-semibold tracking-wider uppercase text-accent">
              {t("tagline")}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("links")}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("contact")}
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>vikhramselvacumaran@gmail.com</li>
              <li>vikhrams@saveetha.ac.in</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("newsletter")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("newsletterSub")}
            </p>
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-medium animate-in fade-in zoom-in-95 duration-300">
                Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder={t("newsletterPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 pr-10 text-sm focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
