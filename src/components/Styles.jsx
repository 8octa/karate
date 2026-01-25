import { useReveal } from "../hooks/useReveal";

const styles = [
  {
    title: "Shōrin-ryū Karate",
    desc: "Okinawan tradition, kata, discipline.",
  },
  {
    title: "Wing Chun",
    desc: "Efficiency, structure, close combat.",
  },
];

export default function Styles() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl uppercase tracking-widest mb-12">
          Martial Arts Styles
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
              <p className="text-muted leading-relaxed">{style.desc}test</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
