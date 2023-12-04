import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheMovieDB-NEXT, KKO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div className='max-w-7xl mx-auto mt-8'>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
