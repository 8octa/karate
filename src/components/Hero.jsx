export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-5xl uppercase tracking-widest">
          Tradiție. Disciplina. Măiestrie.
        </h1>

        <p className="text-muted max-w-xl">
          Shōrin-ryū Karate · Wing Chun Kung Fu
        </p>

        <button className="border border-accent px-8 py-4 uppercase tracking-widest hover:bg-accent transition">
          Join a Class
        </button>
      </div>
    </section>
  );
}
