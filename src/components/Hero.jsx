export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-muted max-w-xl uppercase text-text/30 font-bold">
          Club de Arte Marțiale Zanshin Moreni
        </p>
        <h1 className="text-5xl md:7xl uppercase tracking-widest">
          Tradiție. Disciplina. Măiestrie.
        </h1>

        <p className="text-muted max-w-xl">
          Shōrin-ryū Karate · Wing Chun Kung Fu
        </p>

        <button className="border border-accent px-8 py-4 uppercase tracking-widest hover:bg-accent transition">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Vreau sa învăț!
          </a>
        </button>
      </div>
    </section>
  );
}
