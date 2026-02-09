export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen flex items-center bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto p-6 space-y-6 bg-dark/50">
        <p className="text-sm md:text-muted max-w-xl uppercase text-text/60 font-bold">
          Club de Arte Marțiale Zanshin Moreni
        </p>
        <h1 className="text-xl md:text-5xl font-bold uppercase tracking-widest">
          Tradiție. Disciplina. Măiestrie.
        </h1>

        <p className="text-muted max-w-xl">
          Shōrin-ryū Karate · Wing Chun Kung Fu
        </p>

        <button className="border border-accent px-8 py-4 uppercase tracking-widest hover:bg-accent transition font-bold">
          <a href="#contact">Vreau sa învăț!</a>
        </button>
      </div>
    </section>
  );
}
