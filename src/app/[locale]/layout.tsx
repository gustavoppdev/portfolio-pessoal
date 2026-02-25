// Next.js
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

// Next-Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

// CSS
import "./globals.css";

// Componentes
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Layout.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    metadataBase: new URL("https://gustavoppdev.vercel.app"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: "/og-image.webp",
      siteName: t("openGraph.site_name"),
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    authors: [{ name: "Gustavo Henrique" }],
    creator: "Gustavo Henrique",
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <NavigationBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
