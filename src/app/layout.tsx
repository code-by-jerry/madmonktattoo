import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { seoData } from "@/data/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ThemeProvider } from "@/context/ThemeContext";

// Sans-serif body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Display monk/linework serif heading font
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoData.metadataBase),
  title: seoData.title,
  description: seoData.description,
  alternates: seoData.alternates,
  openGraph: seoData.openGraph,
  twitter: seoData.twitter,
  robots: seoData.robots,
  icons: seoData.icons,
  manifest: "/manifest.webmanifest",
  verification: seoData.verification.google
    ? { google: seoData.verification.google }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} light`} suppressHydrationWarning>
      <head>
        {/* Anti-flash script for instantaneous theme rendering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('madmonk-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-theme-bg text-theme-text-primary antialiased selection:bg-blood selection:text-white transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
