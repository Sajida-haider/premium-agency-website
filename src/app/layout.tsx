import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurelia.example.com"),
  title: {
    default: "Aurelia — Intelligence for modern teams",
    template: "%s · Aurelia",
  },
  description:
    "Aurelia turns scattered data into clear, decisive insight. Unify your analytics, automate your workflows, and move with remarkable speed.",
  keywords: [
    "analytics",
    "workflow automation",
    "business intelligence",
    "data platform",
    "team productivity",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurelia.example.com",
    siteName: "Aurelia",
    title: "Aurelia — Intelligence for modern teams",
    description:
      "Unify your analytics, automate your workflows, and move with remarkable speed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelia — Intelligence for modern teams",
    description:
      "Unify your analytics, automate your workflows, and move with remarkable speed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
