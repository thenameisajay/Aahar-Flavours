import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config/site';

import './globals.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteConfig.title,
    applicationName: siteConfig.applicationName,
    authors: siteConfig.authors,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    icons: siteConfig.icons,
    creator: 'thenameisajay - https://github.com/thenameisajay',
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
