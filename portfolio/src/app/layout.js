import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/chatbot/Providers";
import Chat from "./components/chatbot/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/icon.ico",
  },
  title: "Soran Raof Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
