import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "TKJ Squad — SMKS Rajasa Surabaya",
  description:
    "Kelompok siswa TKJ SMKS Rajasa Surabaya yang berfokus pada jaringan komputer, keamanan siber, pengembangan web, dan infrastruktur digital.",
  keywords: ["TKJ", "SMKS Rajasa", "Surabaya", "Networking", "Cybersecurity"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
