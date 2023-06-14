import Providers from "../components/providers";
import "./globals.css";
import tabs from "./tabs";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="flex flex-col">
          <Providers children={children} tabs={tabs} />
        </div>
      </body>
    </html>
  );
}
