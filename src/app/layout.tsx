import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M Ammar Akhter | Full Stack Web Developer",
  description: "Portfolio of M Ammar Akhter, a passionate Full Stack Web Developer specializing in React, Next.js, and Node.js.",
  keywords: ["M Ammar Akhter", "Web Developer", "Next.js", "React", "Node.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
