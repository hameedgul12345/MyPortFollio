import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Hameed Gul | Full Stack Developer",
  description:
    "Portfolio of Hameed Gul - Full Stack MERN & Next.js Developer",
  keywords: ["Next.js", "React", "Full Stack Developer", "MERN"],
  openGraph: {
    title: "Hameed Gul Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}