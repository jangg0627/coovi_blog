import "./globals.css";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <nav>
          <h1>Coovi's Blog</h1>
        </nav>
      </header>
      <body className={sans.className}>{children}</body>
    </html>
  );
}
