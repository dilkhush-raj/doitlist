import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "DoItList",
  description:
    "Embrace productivity with DoItList, your ultimate companion for managing tasks efficiently and staying organized",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="bg-[#111827] text-white">
      <body className={inter.className}>
        {children}
        <footer>
          <div className="text-center text-sm text-[#4f29f0]">
            *Always sync with local storage before leaving the page.
          </div>
          <div className="mt-2 p-2 text-center text-[#2c3a5e]">
            Developed, designed, and maintained by Dilkhush Raj.
          </div>
        </footer>
      </body>
    </html>
  );
}
