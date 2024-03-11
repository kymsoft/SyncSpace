import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";
import { Kumbh_Sans } from "next/font/google";
import { Providers } from "./providers";
import ThemeButton from "./dashboard/_components/theme";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Home - SyncSpace",
    template: "%s | SyncSpace",
  },
  description: "Final Year Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kumbh.className}>
        <ConvexClientProvider>
          <Providers>
            <div>
            <ThemeButton />
              <Toaster />
              <Header />
              {children}
              <Footer />
              
            </div>
          </Providers>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
