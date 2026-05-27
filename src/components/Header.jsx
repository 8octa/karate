export default function Header() {
  return (
    <header className="w-full border-b border-border bg-bg-soft text-xs md:text-sm p-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
        <span className="text-xs md:text-muted">
          Luni & Miercuri
          <span className="ml-2 text-text">16:00 – 17:00</span>
          <span className="ml-2 text-accent">Karate</span>
        </span>
        <span className="text-xs md:text-muted">
          Marți & Joi
          <span className="ml-2 text-text">17:00 – 18:30</span>
          <span className="ml-2 text-accent">Karate</span>
        </span>
        <span className="text-xs md:text-muted">
          Marți & Joi
          <span className="ml-2 text-text">18:30 – 20:00</span>
          <span className="ml-2 text-accent">Kung Fu</span>
        </span>
      </div>
    </header>
  );
}
