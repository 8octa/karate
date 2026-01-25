export default function TrainingHoursHeader() {
  return (
    <div className="w-full border-b border-border bg-bg-soft text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        <span className="text-muted">
          Marți și Joi
          <span className="ml-2 text-text">18:30 – 20:00</span>
          <span className="ml-2 text-accent">Kung Fu</span>
        </span>

        <span className="hidden md:block text-border">•</span>

        <span className="text-muted">
          Weekend
          <span className="ml-2 text-text">09:00 – 10:00</span>
          <span className="ml-2 text-accent">Karate</span>
        </span>
      </div>
    </div>
  );
}
