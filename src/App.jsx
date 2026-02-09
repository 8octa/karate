import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Styles from "./components/Styles";
import Contests from "./components/Contests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex flex-col gap-10 text-text/80">
        <Hero />
        <About />
        <Styles />
        <Contests />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
