export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen flex items-center bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto p-6 space-y-6 bg-dark/50">
        <p className="text-sm md:text-muted max-w-xl uppercase text-text/60 font-bold">
          Cursuri de arte marțiale în Moreni pentru copii și adulți
        </p>
        <h1 className="font-[Karate] text-4xl font-bold uppercase tracking-widest">
          Traditie. Disciplina. Maiestrie.
        </h1>

        <p className="text-muted max-w-xl">
          Wushu Kung-Fu · Wing Chun Kung-Fu · Karate Okinawan
        </p>

        <p className="text-muted max-w-xl">
          Club Zanshin Moreni oferă antrenamente de Karate Okinawan, Wing Chun
          și Wushu pentru copii, adolescenți și adulți în județul Dâmbovița.
        </p>

        <button className="border border-accent px-8 py-4 uppercase tracking-widest hover:bg-accent transition font-bold">
          <a href="#contact">Vreau sa învăț!</a>
        </button>
      </div>
    </section>
  );
}
