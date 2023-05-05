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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${sans.className} h-screen`} lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto min-h-screen overflow-y-auto">
        {/* max-w-screen-2xl: 요소의 최대 너비를 1536px으로 지정  👉 max-width: 1536px */}
        {/* mx-auto: 요소를 수평 가운데로 정렬  👉 margin-left: auto, margin-right: auto */}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
