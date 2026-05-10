const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-border/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 uppercase  text-accent">Galerie</p>

          <h2 className="text-4xl uppercase  md:text-5xl">Momente</h2>

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
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
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
    </section>
  );
}
