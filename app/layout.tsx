import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local font (Reddit Sans)
const redditSans = localFont({
  src: [
    {
      path: "../public/fonts/RedditSans-Regular.ttf",

      style: "normal",
    },
    {
      path: "../public/fonts/RedditSans-Bold.ttf",

      style: "normal",
    },
    {
      path: "../public/fonts/RedditSans-Medium.ttf",

      style: "normal",
    },
    {
      path: "../public/fonts/RedditSans-MediumItalic.ttf",

      style: "italic",
    },
    {
      path: "../public/fonts/RedditSans-SemiBold.ttf",

      style: "normal",
    },
  ],
  variable: "--font-redditsans",
});

export const metadata: Metadata = {
  title: "Mood Tracker",
  description: "Track your mood, sleep, and reflections daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redditSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
