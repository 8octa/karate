import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Sigla from "./Sigla.jsx";
import { BiSolidMapPin } from "react-icons/bi";

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Despre", href: "#about" },
    { label: "Arte Martiale", href: "#styles" },
    { label: "Dojo", href: "#dojo" },
    { label: "Competiții", href: "#contests" },
    { label: "Contact", href: "#contact" },
    { label: "Studenti", href: "#black-belts" },
    { label: "Galerie", href: "#gallery" },
  ];

  return (
    <nav className="z-50 w-full border-b border-border backdrop-blur p-1 position sticky top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex justify-center items-center gap-5">
          <span className="uppercase tracking-tracking-widest text-xs">
            <a href="#hero">
              <Sigla theme={theme} className="h-10 w-10" />
            </a>
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=100064099292874"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/clubzanshin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="tel:+40722637848">
            <BsFillTelephoneFill />
          </a>

          <a
            href="https://www.google.com/maps/place/Ion+Luca+Caragiale+National+College/@44.9787567,25.6462214,18.5z/data=!4m6!3m5!1s0x40b2579e4510cc77:0x8f8edc8519a3d38b!8m2!3d44.9784895!4d25.6463577!16s%2Fg%2F1hc1sp84r?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-xs font-bold uppercase tracking-tracking-widest ">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer text-text hover:text-accent transition"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="text-text hover:text-accent transition p-2 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-text hover:text-accent transition p-2 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text hover:text-accent transition p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-4 text-xs font-bold uppercase tracking-tracking-widest">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer text-text hover:text-accent transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
