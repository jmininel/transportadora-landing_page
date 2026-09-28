import About from "./_components/About/About";
import Benefits from "./_components/Benefits/Benefits";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Footer />
      </div>
    </>
  );
}
