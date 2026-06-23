import fs from "fs";
import path from "path";

export interface Frontmatter {
  title: string;
  description: string;
  category: string;
  readTime: number;
  date: string;
}

export interface Article {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export function getArticles(locale: string): Article[] {
  try {
    const contentDir = path.join(process.cwd(), "content", locale);
    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const files = fs.readdirSync(contentDir);
    const articles = files
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(contentDir, file);
        const slug = file.replace(/\.mdx?$/, "");
        const fileContent = fs.readFileSync(filePath, "utf-8");

        // Parse frontmatter
        const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!match) {
          return {
            slug,
            frontmatter: {
              title: slug,
              description: "",
              category: "General",
              readTime: 5,
              date: new Date().toISOString().split("T")[0],
            },
            content: fileContent,
          };
        }

        const yamlBlock = match[1];
        const content = match[2];

        const frontmatter: any = {};
        yamlBlock.split("\n").forEach((line) => {
          const colonIndex = line.indexOf(":");
          if (colonIndex > -1) {
            const key = line.slice(0, colonIndex).trim();
            const value = line
              .slice(colonIndex + 1)
              .trim()
              .replace(/^["']|["']$/g, ""); // strip quotes
            
            if (key === "readTime") {
              frontmatter[key] = parseInt(value, 10) || 5;
            } else {
              frontmatter[key] = value;
            }
          }
        });

        return {
          slug,
          frontmatter: frontmatter as Frontmatter,
          content,
        };
      });

    return articles;
  } catch (error) {
    console.error("Error reading MDX files:", error);
    return [];
  }
}
