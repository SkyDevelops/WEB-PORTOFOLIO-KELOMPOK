import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Diperlukan untuk GitHub Pages
  images: {
    unoptimized: true, // Diperlukan karena static export tidak mendukung optimasi image bawaan
  },
  // Hapus komentar di bawah ini jika Anda TIDAK menggunakan custom domain
  // basePath: "/WEB-PORTOFOLIO-KELOMPOK", 
};

export default nextConfig;
