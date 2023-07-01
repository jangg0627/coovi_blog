import "./globals.css";
import { Open_Sans } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Coovi's Blog",
  description: "성장하는 개발자 Coovi 입니다.",
  other: {
    "google-site-verification": "6pGD24xImh6iZ_plFFU0AOeDyq5uU_lzXeRxFGJgg1I",
    "naver-site-verification": "ae3019a4a55e894820a644adc60ff9b5762ca566",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${sans.className} h-screen`} lang="en">
      <GoogleAnalytics GA_TRACKING_ID={"G-GZJ3T27Z0V"} />
      <body className="flex flex-col w-full min-h-screen mx-auto overflow-y-auto max-w-screen-2xl">
        {/* max-w-screen-2xl: 요소의 최대 너비를 1536px으로 지정  👉 max-width: 1536px */}
        {/* mx-auto: 요소를 수평 가운데로 정렬  👉 margin-left: auto, margin-right: auto */}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
