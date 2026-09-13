import type { Project } from '../data/portfolio';

const accentClasses = {
  cyan: 'from-cyanSignal/25 to-cyanSignal/5 border-cyanSignal/25',
  emerald: 'from-emeraldSignal/25 to-emeraldSignal/5 border-emeraldSignal/25',
  violet: 'from-violetSignal/25 to-violetSignal/5 border-violetSignal/25',
  sky: 'from-sky-300/25 to-sky-300/5 border-sky-300/25',
};

export function ProjectCard({ project }: { project: Project }) {
  const showActions = project.title === 'AsthmaAware';

  return (
    <article className={`group glass-panel relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow ${accentClasses[project.accent]}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanSignal/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">{project.category}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-slate-300">
          {project.status}
        </span>
      </div>
      <p className="mt-4 min-h-24 leading-7 text-slate-300">{project.description}</p>
      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-slate-500">Focus</p>
        <p className="mt-2 text-sm font-medium text-slate-100">{project.metric}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {showActions ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#" className="small-action">
            View Details
          </a>
          <a href="https://github.com/gt-big-data/asthma-aware" className="small-action muted">
            GitHub
          </a>
        </div>
      ) : null}
    </article>
  );
}
