import { useReveal } from "../hooks/useReveal";

export default function About() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="about-reveal space-y-6">
          <h2 className="text-3xl uppercase tracking-widest">
            About the Instructor
          </h2>
          <p className="italic text-muted">
            “Martial arts is not violence — it is discipline.”
          </p>
          <p className="text-muted leading-relaxed">
            With over 25 years of experience, training focuses on tradition,
            respect, and mastery of body and mind.
          </p>
        </div>

        <div className="about-reveal border-l border-border pl-8">
          <p className="text-6xl text-accent">25+</p>
          <p className="uppercase tracking-widest text-sm text-muted">
            Years of Teaching
          </p>
        </div>
      </div>
    </section>
  );
}
