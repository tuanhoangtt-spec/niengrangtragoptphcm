import FloatingContact from "@/components/FloatingContact"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title:
    "Nha Khoa AVA - Địa Chỉ Nha Khoa Uy Tín Quận 10 | Khám & Chụp Phim Miễn Phí",
  description:
    "Tìm nha khoa uy tín Quận 10? Nha Khoa AVA (BS. Phạm Việt Hùng - 16+ năm kinh nghiệm) chuyên niềng răng Quận 10, cắm Implant. Hỗ trợ niềng răng trả góp TPHCM 0% lãi suất.",
};

export const viewport: Viewport = {
  themeColor: "#3F5219",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="bg-white">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
		<ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <FloatingContact />
      </body>
      </body>
    </html>
  );
}
