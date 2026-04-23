import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zone Fitness Bouskoura",
  description:
    "Zone Fitness Bouskoura — Salle de sport à Bouskoura, Casablanca. Musculation, cardio, boxing, cours collectifs et coaching personnalisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
