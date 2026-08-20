import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://vanguardgolfclub.com"),
  title: {
    default: "Vanguard Golf Club — Year-Round Indoor Golf in Dedham, MA",
    template: "%s | Vanguard Golf Club",
  },
  description:
    "Ten TrackMan bays open 24/7, the region's best complete indoor short game, and coaching from Golf Digest's #1 teacher in Massachusetts. Dedham, MA.",
  openGraph: {
    title: "Vanguard Golf Club — Year-Round Indoor Golf",
    description: "Ten TrackMan bays open 24/7 in Dedham, MA. Great golf, no off-season.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
