import "./styles.css";
import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import NavBar from "@/components/specific/NavBar";
import Footer from "@/components/specific/Footer";
import { ThemeProvider } from "@/context/themeContext";
import { MenuProvider } from "@/context/MenuContext";
import Script from "next/script";
import { cookies } from 'next/headers';
import type { Theme } from "@/types/types";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "@/components/common/ScrollToTop";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vleonardojuanpablo.com/"),
  title:
    "Leonardo Valdez | Frontend Engineer – React, TypeScript, Next.js Expert",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Portfolio of Leonardo Valdez, a Frontend Engineer specializing in React, TypeScript, and Next.js. Expert in building scalable web applications with modern technologies.",
  keywords: [
    "Leonardo Valdez",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "TypeScript Expert",
    "Next.js Developer",
    "TypeScript",
    "Next.js",
    "SaaS applications",
    "web development",
    "e-commerce backend",
    "AI prompt engineering",
    "responsive design",
    "JavaScript developer",
    "agile developer",
    "UI/UX developer",
    "scalable web applications",
    "Tucuman Argentina developer",
    "Web Development",
    "Frontend Architecture",
    "UI/UX Development",
    "Performance Optimization",
    "Node.js",
    "MongoDB",
    "Full Stack Development",
    "Agile Development",
    "Scrum",
    "Tucumán Argentina",
  ],
  alternates: {
    canonical: "https://vleonardojuanpablo.com/",
    languages: {
      en: "https://vleonardojuanpablo.com/",
    },
  },
  openGraph: {
    title:
      "Leonardo Valdez | Frontend Engineer – React, TypeScript, Next.js Expert",
    description:
      "Portfolio of Leonardo Valdez, a Frontend Engineer specializing in React, TypeScript, and Next.js. Expert in building scalable web applications with modern technologies.",
    url: "https://vleonardojuanpablo.com/",
    type: "website",
    images: [
      {
        url: "/images/portfolio-img.webp",
        width: 1200,
        height: 630,
        alt: "Leonardo Valdez Portfolio",
      },
    ],
    siteName: "Leonardo Valdez Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Valdez | Frontend Engineer Portfolio",
    description:
      "Portfolio of Leonardo Valdez, a Frontend Engineer specializing in React, TypeScript, and Next.js.",
    images: ["/images/portfolio-img.webp"],
    creator: "@juanpaavaldez",
  },
  authors: [
    {
      name: "Leonardo Juan Pablo Valdez",
      url: "https://vleonardojuanpablo.com/",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = (themeCookie?.value as Theme) || 'light';
  
  return (
    <html lang="en" suppressHydrationWarning data-theme={theme}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${onest.variable}`}>
        <ThemeProvider>
          <MenuProvider>
            <NavBar />
            <main className="container" id="main-content" role="main">
              {children}
              <SpeedInsights />
              <Analytics />
            </main>
            <Footer />
            <ScrollToTop />
          </MenuProvider>
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leonardo Valdez",
              url: "https://vleonardojuanpablo.com/",
              jobTitle: "Frontend Engineer",
              knowsAbout: ["React", "TypeScript", "Next.js", "Web Development"],
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
              sameAs: [
                "https://linkedin.com/in/leonardo-valdez",
                "https://github.com/Orbitado",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
