const styles = [
  {
    title: "Shōrin-ryū Karate",
    desc: "Tradiție din Okinawa, kata, disciplină.",
    text: "Shōrin-ryū Karate este unul dintre cele mai vechi și mai respectate stiluri de karate din Okinawa, având origini ce datează din secolul al XIX-lea. Numele Shōrin derivă din pronunția okinaweană a caractarelor chinezești pentru Pădurea Shaolin, reflectând influențele chinezești din artele marțiale tradiționale. Shōrin-ryū se distinge prin mișcări naturale, rapide și fluide, care pun accent pe agilitate și viteză în locul forței brute.",
  },
  {
    title: "Wing Chun / Wushu",
    desc: "Eficiență, inteligență, poziționare",
    text: "Wing Chun se bazează pe conceptul de eficiență maximă cu efort minim. Spre deosebire de multe alte arte marțiale care se bazează pe forță fizică brută, Wing Chun utilizează principii mecanice inteligente și poziționare superioară pentru a învinge adversari mai puternici. Stilul pune accent pe linia centrală, economie de mișcare și simultaneitatea atacului și apărării.",
  },
];

export default function Styles() {
  return (
    <section id="styles" className="py-24 border-t border-border">
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
