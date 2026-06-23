"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function AwarenessHubClient({ initialArticles, locale }: { initialArticles: any[], locale: string }) {
  const t = useTranslations("awarenessHub");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: t("filterAll") },
    { id: "Women's Safety", label: "Women's Safety" },
    { id: "Urban Safety", label: t("filterUrban") },
    { id: "Digital Safety", label: t("filterDigital") },
    { id: "AI Literacy", label: t("filterAI") },
    { id: "Cyber Safety", label: t("filterCyber") },
  ];

  const filteredArticles = initialArticles.filter((article) => {
    const matchesSearch = article.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.frontmatter.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.frontmatter.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 mt-8">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-8 mb-16 max-w-4xl mx-auto w-full">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm pl-12 pr-4 py-4 text-base focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card/40 border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredArticles.map((article) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={article.slug}
              className="flex flex-col h-full rounded-2xl border border-border bg-card/30 hover:bg-card/50 hover:border-violet-500/20 transition-all overflow-hidden group"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                    {article.frontmatter.category}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.frontmatter.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {article.frontmatter.description}
                </p>

                <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.frontmatter.readTime} {t("readTime")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.frontmatter.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredArticles.length === 0 && (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <div className="p-4 rounded-full bg-muted mb-4">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold">No resources found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
}
