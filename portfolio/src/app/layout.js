import Navbar from "./components/Navbar";
import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soran Raof Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
