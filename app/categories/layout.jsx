import "normalize.css/normalize.css";
import "../globals.css";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Filter />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
