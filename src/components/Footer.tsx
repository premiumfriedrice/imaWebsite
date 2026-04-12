export default function Footer() {
  return (
    <footer className="relative z-1 py-12 px-8 border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <span className="font-[var(--font-display)] text-lg font-extrabold bg-gradient-to-br from-accent-green to-accent-mint bg-clip-text text-transparent">
          ima
        </span>
        <span className="text-text-tertiary text-xs font-light">
          &copy; 2026 ima. All rights reserved.
        </span>
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="#"
              className="text-text-tertiary text-xs hover:text-text-secondary transition-colors duration-250"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-text-tertiary text-xs hover:text-text-secondary transition-colors duration-250"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="mailto:sudofriedrice@gmail.com"
              className="text-text-tertiary text-xs hover:text-text-secondary transition-colors duration-250"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
