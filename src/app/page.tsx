"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect user language or default to 'en'
    const languages = ["en", "ta", "hi", "kn", "te", "ml"];
    let detectedLocale = "en";

    if (typeof window !== "undefined" && window.navigator) {
      const browserLang = window.navigator.language.split("-")[0];
      if (languages.includes(browserLang)) {
        detectedLocale = browserLang;
      }
    }

    // Redirect to locale-specific page
    router.replace(`/${detectedLocale}`);
  }, [router]);

  return (
    <html lang="en">
      <body className="bg-[#0B1020] flex items-center justify-center h-screen text-slate-100 font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium tracking-wide opacity-80">Loading NariRaksha...</p>
        </div>
      </body>
    </html>
  );
}
