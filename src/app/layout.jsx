

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairsTransition";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Header/>
            <StairTransition/>
            <PageTransition>
                {children}
            </PageTransition>
            <Footer/>
        </body>
      </html>

    
  );
}