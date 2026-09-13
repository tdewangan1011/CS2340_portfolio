import { experiences } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Research, development, teaching, and leadership"
          description="A timeline of academic, research, internship, project, nonprofit, and teaching experiences."
        />
        <div className="relative mt-12">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyanSignal via-white/15 to-transparent md:left-1/2" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div key={`${item.organization}-${item.role}`} className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? 'md:[&>*:first-child]:col-start-2' : ''}`}>
                <div className="glass-panel ml-10 p-6 md:ml-0">
                  <div className="absolute left-1.5 mt-1 h-5 w-5 rounded-full border border-cyanSignal/60 bg-ink shadow-[0_0_22px_rgba(54,244,218,0.45)] md:left-1/2 md:-translate-x-1/2" />
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">{item.signal}</p>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <span className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-xs text-slate-300">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-emeraldSignal">{item.organization}</p>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
