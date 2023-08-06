import "normalize.css/normalize.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import Decorate from "@/components/Decorate";
import Wheel from "@/components/Wheel";
import { getProducts } from "@/model/products";

export const metadata = {
  title: "Minissentials",
  description: "Online shop for essentials",
  icons: { icon: "/logo.jpg" },
};

export default async function RootLayout({ children }) {
  let products = await getProducts();
  return (
    <html lang="en">
      <body>
        <Header />
        <Featured />
        {children}
        <Decorate />
        <Wheel products={products} />
        <Footer />
      </body>
    </html>
  );
}
