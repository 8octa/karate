export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="z-50 w-full border-b border-border backdrop-blur p-1 position sticky top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="uppercase tracking-tracking-widest text-xs">
          Martial Arts
        </span>

        <div className="flex items-center gap-8">
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

          <button
            onClick={toggleTheme}
            className="text-text hover:text-accent transition p-2 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
