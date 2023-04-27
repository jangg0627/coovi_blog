import "./globals.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Coovi's Blog",
  description: "성장하는 개발자 Coovi 입니다.",
};

const navList = ["About", "Posts", "Contact"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sans.className} lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
