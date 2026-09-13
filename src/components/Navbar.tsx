import { navItems } from '../data/portfolio';

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyanSignal/35 bg-white/[0.06] font-mono text-sm font-semibold text-cyanSignal shadow-glow">
            TD
          </span>
          <span className="hidden text-sm font-medium text-slate-200 sm:block">Tanmay Dewangan</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="mailto:tdewangan1011@gmail.com"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 sm:inline-flex"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tanmay-dewangan/"
            className="hidden rounded-full border border-cyanSignal/35 bg-cyanSignal/10 px-4 py-2 text-sm font-medium text-cyanSignal transition hover:bg-cyanSignal/20 sm:inline-flex"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-cyanSignal/35 bg-cyanSignal/10 px-4 py-2 text-sm font-medium text-cyanSignal transition hover:bg-cyanSignal/20"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
