import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const items = [
  {
    label: "Facebook",
    value: "Club Zanshin Moreni",
    href: "https://www.facebook.com/profile.php?id=100064099292874",
    icon: <FaFacebook className="h-5 w-5" />,
  },
  {
    label: "Instagram",
    value: "@clubzanshin",
    href: "https://www.instagram.com/clubzanshin/",
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    label: "TikTok",
    value: "În curând pe TikTok",
    href: "#",
    icon: <FaTiktok className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: "0722 637 848",
    href: "tel:+40722637848",
    icon: <BsFillTelephoneFill className="h-5 w-5" />,
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
