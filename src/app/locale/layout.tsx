import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "NariRaksha - AI for Women's Safety",
  description: "Building safer cities through responsible, multilingual, and gender-responsive AI.",
  keywords: "women safety AI, gender responsive AI, responsible AI, urban safety, AI for social good",
};

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ta" },
    { locale: "hi" },
    { locale: "kn" },
    { locale: "te" },
    { locale: "ml" },
  ];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    messages = {};
  }

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-full flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex flex-col flex-1">
              {/* Background gradient elements */}
              <div className="absolute inset-0 -z-50 overflow-hidden pointer-events-none opacity-40 dark:opacity-60">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-700/10 blur-[120px]"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-pink-500/5 blur-[120px]"></div>
                <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-teal-500/5 blur-[120px]"></div>
              </div>
              
              <Navbar locale={locale} />
              <main className="flex-1 flex flex-col w-full pt-16">
                {children}
              </main>
              <Footer locale={locale} />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
