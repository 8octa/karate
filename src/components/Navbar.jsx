export default function Navbar() {
  return (
    <nav className="z-50 w-full border-b border-border backdrop-blur p-1 position sticky top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="uppercase tracking-tracking-widest text-xs">
          Martial Arts
        </span>

        <ul className="flex gap-8 text-xs font-bold uppercase tracking-tracking-widest ">
          {["Despre", "Sensei", "Arte Martiale", "Contact"].map((item) => (
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
