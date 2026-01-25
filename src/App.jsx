import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Styles from "./components/Styles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col gap-10 text-text/80">
        <Hero />
        <About />
        <Styles />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
