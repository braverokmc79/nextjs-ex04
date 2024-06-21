import MainHeader from "@/components/main-header";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function MarketingLayout({ children }) {
  return (
    <html lang="ko">
      <body>
       {children}
      </body>
    </html>
  );
}
