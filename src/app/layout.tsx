import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "@/utils/fonts";


export const metadata = {
  title: "Ajit Goud – Portfolio",
  description: "Fullstack & Android Specialist – Ajit Goud's personal portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300  [font-family:var(--font-montserrat)]`}>
        <Navigation />
        <main className={`flex-1 ${montserrat.variable}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
