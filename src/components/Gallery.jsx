const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
];

import React, { useState, useCallback, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Gallery() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const fullscreenImg =
    fullscreenIndex !== null ? images[fullscreenIndex] : null;

  // Close on Escape + navigate with arrows
  useEffect(() => {
    if (fullscreenIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setFullscreenIndex(null);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenIndex]);

  const handleImgClick = useCallback((index) => {
    setFullscreenIndex(index);
  }, []);

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const nextImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setFullscreenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeFullscreen();
  };

  return (
    <section id="gallery" className="border-t border-border/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 uppercase text-accent">Galerie</p>

          <h2 className="text-4xl uppercase md:text-5xl">Momente</h2>

          <p className="mt-6 leading-relaxed">
            Antrenamente, seminarii, sparring și momente care reflectă
            disciplina și spiritul comunității noastre.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden border border-border/20
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
              onClick={() => handleImgClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                loading="lazy"
                src={image}
                alt={`Antrenament Wing Chun la Club Zanshin Moreni ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <IoMdClose className="cursor-pointer" size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <FaChevronLeft className="cursor-pointer" size={36} />
          </button>

          {/* Image */}
          <img
            src={fullscreenImg}
            alt="Antrenament Wing Chun la Club Zanshin Moreni"
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            style={{ objectFit: "contain" }}
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <FaChevronRight className="cursor-pointer" size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
