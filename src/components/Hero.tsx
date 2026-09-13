import { DashboardMockup } from './DashboardMockup';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyanSignal shadow-[0_0_16px_rgba(54,244,218,0.9)]" />
            Georgia Tech CS | Machine Learning | Software Engineering | Data Science
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I’m Tanmay!
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m interested in machine learning, software engineering, data science, and research. Much of my
            current work applies computing to areas like perception, health, environmental data, and nonprofit or
            community applications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn-secondary">
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/tanmay-dewangan/" className="btn-ghost">
              LinkedIn
            </a>
            <a href="mailto:tdewangan1011@gmail.com" className="btn-ghost">
              Email
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {['Health Data', 'Research', 'Software', 'Community Work'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Focus</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}
