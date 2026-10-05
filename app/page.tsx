import About from "./_components/About/About";
import Benefits from "./_components/Benefits/Benefits";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Products from "./_components/Products/Products";
import Services from "./_components/Suppliers/Suppliers";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Benefits />
        <Products />
        <Services />
        <Footer />
      </div>
    </>
  );
}
