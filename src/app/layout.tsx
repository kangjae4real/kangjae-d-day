import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import RecoilProvider from "@/providers/recoil-provider";
import ThemeProvider from "@/providers/theme-provider";
import BaseLayout from "@/components/layouts/base-layout";
import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kangjae D-DAY Counter",
  description: "강재의 전역일이 몇 일 남았을까요?",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <RecoilProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <BaseLayout>{children}</BaseLayout>
          </ThemeProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
