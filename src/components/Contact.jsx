import React from "react";

const items = [
  {
    label: "Facebook",
    value: "facebook.com/yourpage",
    href: "https://facebook.com/yourpage",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v8h3.5z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "facebook.com/yourpage",
    href: "https://facebook.com/yourpage",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v8h3.5z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@yourhandle",
    href: "https://instagram.com/yourhandle",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    value: "@yourtiktok",
    href: "https://www.tiktok.com/@yourtiktok",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 3v10.2a3.4 3.4 0 1 1-3-3.4V7.2a6.2 6.2 0 1 0 5 6.1V8.6c1.3 1 3 1.6 5 1.6V7.6c-2.9 0-5-2.1-5-4.6H14Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "dojo@example.com",
    href: "mailto:dojo@example.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.3l8 5 8-5V8H4Zm16 8V10.7l-8 5-8-5V16h16Z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+40 7xx xxx xxx",
    href: "tel:+40700000000",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C10.3 21.3 2.7 13.7 2.7 4.3 2.7 3.6 3.3 3 4 3h2.9c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.6 3.1.1.4 0 .9-.2 1.2l-2 2.2Z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl uppercase tracking-widest">Contact</h2>
          <p className="mt-3 max-w-xl text-text-muted leading-relaxed">
            Contactează-ne pentru a te înscrie la un curs, a întreba despre
            program sau orice altă curiozitate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Contact cards */}
          <div className="grid gap-4">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between border border-border/30 bg-dark-soft/60 px-6 py-5 transition hover:border-accent"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-border/30 text-text group-hover:text-accent transition">
                    {it.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-text">
                      {it.label}
                    </p>
                    <p className="text-sm text-muted">{it.value}</p>
                  </div>
                </div>

                <span className="text-muted group-hover:text-accent transition">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Right: Simple message box (optional) */}
          <div className="border border-border/30 bg-dark-soft/60 p-8">
            <h3 className="text-xl uppercase tracking-widest">
              Hai la antrenament!
            </h3>
            <p className="mt-4 text-text-muted leading-relaxed">
              Spune-ne care este vârsta ta, stilul dorit (Karate / Kung Fu) și
              disponibilitatea. Îți vom răspunde cu cea mai bună opțiune.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <p className="uppercase tracking-widest text-text">Program</p>
              <p className="text-text-muted">
                Marți & Joi: <span className="text-text">18:30 – 20:00</span>{" "}
                <span className="text-accent">Kung Fu</span>
              </p>
              <p className="text-text-muted">
                Weekend: <span className="text-text">09:00 – 10:00</span>{" "}
                <span className="text-accent">Karate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
