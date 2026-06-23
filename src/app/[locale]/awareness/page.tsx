import { useTranslations } from "next-intl";
import { getArticles } from "@/lib/mdx";
import AwarenessHubClient from "./AwarenessHubClient";

export default async function AwarenessHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Read MDX files server-side at build time
  const articles = getArticles(locale);

  // If we don't have enough articles for demonstration, let's duplicate some with mock data
  const defaultArticles = [
    {
      slug: "street-lighting",
      frontmatter: {
        title: "Improving Urban Street Lighting for Women's Safety",
        description: "How street lighting configuration, positioning, and luminaire quality impact safety perceptions and crime deterrence in urban centers.",
        category: "Urban Safety",
        readTime: 4,
        date: "2026-06-22"
      },
      content: ""
    },
    {
      slug: "digital-hygiene",
      frontmatter: {
        title: "Digital Safety: Best Practices for Personal Devices",
        description: "A guide on securing your smartphone, protecting location data, and understanding privacy permissions on everyday apps.",
        category: "Digital Safety",
        readTime: 3,
        date: "2026-06-22"
      },
      content: ""
    },
    {
      slug: "responsible-ai",
      frontmatter: {
        title: "What is Gender-Responsive AI?",
        description: "Demystifying artificial intelligence systems that actively account for and address gender biases and female safety in urban data.",
        category: "AI Literacy",
        readTime: 5,
        date: "2026-06-22"
      },
      content: ""
    },
    {
      slug: "cyber-harassment",
      frontmatter: {
        title: "Dealing with Online Harassment",
        description: "Actionable steps to protect yourself from cyberbullying, reporting mechanisms, and digital footprint management.",
        category: "Cyber Safety",
        readTime: 6,
        date: "2026-06-15"
      },
      content: ""
    },
    {
      slug: "transit-apps",
      frontmatter: {
        title: "Evaluating Safety Features in Transit Apps",
        description: "What to look for when using ride-sharing or public transit applications. Understanding SOS features and tracking.",
        category: "Women's Safety",
        readTime: 4,
        date: "2026-06-10"
      },
      content: ""
    }
  ];

  // Merge actual MDX files with default ones for a rich demonstration
  const displayArticles = articles.length >= 3 ? articles : defaultArticles;

  return <AwarenessHubClient initialArticles={displayArticles} locale={locale} />;
}
