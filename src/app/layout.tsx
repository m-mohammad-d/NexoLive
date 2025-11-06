import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitch",
  description:
    "Twitch is the world's leading video platform and community for gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <NextTopLoader
            color="#fa541c"
            shadow="0 0 10px #417F56,0 0 5px #fa541c"
            showSpinner={false}
            crawl={false}
          />

          <Toaster />
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="twitch-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
