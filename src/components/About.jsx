export default function About() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="about-reveal space-y-6">
          <h2 className="text-3xl uppercase tracking-widest">
            Sensei Stanciu Nicușor
          </h2>
          <p className="italic text-muted">
            “Artele marțiale nu înseamnă violență, ci disciplină.”
          </p>
          <p className="text-muted leading-relaxed">
            Cu peste 30 de ani de experiență, antrenamentul se concentrează pe
            tradiție, respect, stăpânirea corpului și a minții.
          </p>
        </div>

        <div className="about-reveal border-l border-border pl-8">
          <p className="text-6xl text-accent">30+</p>
          <p className="uppercase tracking-widest text-sm text-muted">
            Ani de Experiență
          </p>
        </div>
      </div>
    </section>
  );
}
