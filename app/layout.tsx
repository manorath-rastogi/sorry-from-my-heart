import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Quiet Apology",
  description: "A cinematic apology experience built with Next.js, Tailwind, and Framer Motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
