export const BASE_PATH = "/WEB-PORTOFOLIO-KELOMPOK";

/**
 * Mendapatkan path aset yang benar untuk GitHub Pages
 * @param path Path yang dimulai dengan /
 * @returns Path lengkap dengan BASE_PATH
 */
export function getAssetPath(path: string) {
  if (process.env.NODE_ENV === "development") return path;
  return `${BASE_PATH}${path}`;
}
