const styles = [
  {
    title: "Shōrin-ryū Karate",
    desc: "Tradiție din Okinawa, kata, disciplină.",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima odio amet magni? Tenetur eos, qui iusto minus debitis voluptate voluptatem enim inventore fuga consequatur vel tempora obcaecati voluptatum fugit?",
  },
  {
    title: "Wing Chun",
    desc: "Eficiență, structură, luptă corp la corp.",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima odio amet magni? Tenetur eos, qui iusto minus debitis voluptate voluptatem enim inventore fuga consequatur vel tempora obcaecati voluptatum fugit?",
  },
];

export default function Styles() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl uppercase tracking-widest mb-12">
          Stiluri de arte marțiale practicate
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {styles.map((style) => (
            <div
              key={style.title}
              className="style-card border border-border p-8 hover:border-accent transition"
            >
              <h3 className="text-xl uppercase tracking-widest mb-4">
                {style.title}
              </h3>
              <p className="text-muted leading-relaxed mb-2">{style.desc}</p>

              <p className="text-muted leading-relaxed text-sm">{style.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
