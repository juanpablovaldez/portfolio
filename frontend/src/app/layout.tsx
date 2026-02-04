import "./styles.css";
import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import NavBar from "@/components/specific/NavBar";
import Footer from "@/components/specific/Footer";
import { ThemeProvider } from "@/context/themeContext";
import { MenuProvider } from "@/context/MenuContext";
import Script from "next/script";
import { cookies } from "next/headers";
import type { Theme } from "@/types/types";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://juanpablovaldez.com/"),
  title:
    "Juan Pablo Valdez | Software Developer | Product Developer | Product development with robust architectures and scalability optimization in the JavaScript ecosystem",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
  },
  description:
    "Portfolio of Juan Pablo Valdez, a Software Developer and Product Developer specializing in building robust product architectures and optimizing scalability in the JavaScript ecosystem.",
  keywords: [
    "Juan Pablo Valdez",
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
    canonical: "https://juanpablovaldez.com/",
    languages: {
      en: "https://juanpablovaldez.com/",
    },
  },
  openGraph: {
    title:
      "Juan Pablo Valdez | Software Developer | Product Developer | Product development with robust architectures and scalability optimization in the JavaScript ecosystem",
    description:
      "Portfolio of Juan Pablo Valdez, a Software Developer and Product Developer specializing in building robust product architectures and optimizing scalability in the JavaScript ecosystem.",
    url: "https://juanpablovaldez.com/",
    type: "website",
    images: [
      {
        url: "/images/portfolio-img.webp",
        width: 1200,
        height: 630,
        alt: "Juan Pablo Valdez Portfolio",
      },
    ],
    siteName: "Juan Pablo Valdez Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo Valdez | Software Developer Portfolio",
    description:
      "Portfolio of Juan Pablo Valdez, a Software Developer and Product Developer specializing in building robust product architectures and optimizing scalability in the JavaScript ecosystem.",
    images: ["/images/portfolio-img.webp"],
    creator: "@juanpaavaldez",
  },
  authors: [
    {
      name: "Juan Pablo Valdez",
      url: "https://juanpablovaldez.com/",
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
  const themeCookie = cookieStore.get("theme");
  const theme = (themeCookie?.value as Theme) || "light";

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
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Pablo Valdez",
              givenName: "Juan Pablo",
              familyName: "Valdez",
              url: "https://juanpablovaldez.com/",
              image: "https://juanpablovaldez.com/images/portfolio-img.webp",
              email: "juanpaavaldezz@gmail.com",
              jobTitle: "Software Developer & Product Developer",
              description:
                "Software Developer and Product Developer specializing in building robust product architectures and optimizing scalability in the JavaScript ecosystem.",
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "Web Development",
                "Frontend Architecture",
                "UI/UX Development",
                "Node.js",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tucumán",
                addressCountry: "Argentina",
              },
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
              sameAs: [
                "https://linkedin.com/in/juanpablovaldez",
                "https://github.com/juanpablovaldez",
                "https://www.instagram.com/juanpabloovaldez",
                "https://twitter.com/juanpaavaldez",
              ],
            }),
          }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Juan Pablo Valdez Portfolio",
              url: "https://juanpablovaldez.com/",
              description:
                "Portfolio of Juan Pablo Valdez, a Software Developer and Product Developer specializing in building robust product architectures and optimizing scalability in the JavaScript ecosystem.",
              author: {
                "@type": "Person",
                name: "Juan Pablo Valdez",
                url: "https://juanpablovaldez.com/",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
