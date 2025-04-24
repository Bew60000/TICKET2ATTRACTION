import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tickets from "@/components/ticket/Tickets";
import Cart from "@/components/cart/Cart";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 flex justify-center gap-4 my-4 mx-auto">
        <Tickets />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
