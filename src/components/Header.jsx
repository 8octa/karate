export default function Header() {
  return (
    <header className="w-full border-b border-border bg-bg-soft text-xs md:text-sm p-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
        <span className="text-xs md:text-muted">
          Marți, Joi
          <span className="ml-2 text-text">18:30 – 20:00</span>
          <span className="ml-2 text-accent">Kung Fu</span>
        </span>

        <span className="hidden md:block text-accent">•</span>

        <span className="text-xs md:text-muted">
          Weekend
          <span className="ml-2 text-text">09:00 – 11:00</span>
          <span className="ml-2 text-accent">Karate</span>
        </span>
      </div>
    </header>
  );
}
