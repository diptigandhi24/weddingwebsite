import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const weddingFont = localFont({
  src: [
    {
      path: "../../public/fonts/AbhayaLibre-ExtraBold.ttf",
    },
    {
      path: "../../public/fonts/AbhayaLibre-SemiBold.ttf",
    },
  ],
  variable: "--font-abhaya",
});
const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir_ff/AvenirLTStd-Roman.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/avenir_ff/AvenirLTStd-Book.otf",
      weight: "400",
    },
  ],
  variable: "--font-avenir",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JEENI",
  description: "Wedding Celebration Info",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${weddingFont.variable} ${avenir.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
