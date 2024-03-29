import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aahar Flavours - Fresh Authentic Cuisine",
  applicationName: "Aahar Flavours",
  authors: [{ name: "Aahar Flavours" }],
  description:
    "Nepalese fresh authentic food, Flavours, Best food, Indian, North Indian",
  keywords:
    "Nepalese, Authentic, Flavours, Reading, Twyford, Wokingham, authentic food, flavours, best food, indian, north indian, comfort food, hungry, spices, herbs, curry, naan, wings, chicken, dal makhni",
  icons: {
    icon: { url: "/images/logo/logo.png" },
    shortcut: ["/images/logo/logo.png"],
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "/favicons/android-chrome-384x384.png",
        url: "/favicons/android-chrome-384x384.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" h-dvh w-screen">
      <body className={inter.className}>
        <main className="flex flex-col dark:bg-white ">{children}</main>
      </body>
    </html>
  );
}
