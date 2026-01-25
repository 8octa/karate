export default function Navbar() {
  return (
    <nav className="z-50 w-full border-b border-border bg-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="uppercase tracking-tracking-widest text-sm">
          Martial Arts
        </span>

        <ul className="flex gap-8 text-sm uppercase tracking-tracking-widest ">
          {["Despre", "Arte Martiale", "Program", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-text hover:text-accent transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
