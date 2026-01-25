import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Styles from "./components/Styles";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col gap-10 text-white">
        <Hero />
        <About />
        <Styles />
      </main>
    </>
  );
}
