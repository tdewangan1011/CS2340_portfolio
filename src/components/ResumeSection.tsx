import { SectionHeader } from './SectionHeader';

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            eyebrow="Resume"
            title="Resume"
          />
          <div className="glass-panel p-6 sm:p-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Resume Preview</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Computer Science Student Resume</h3>
                </div>
                <span className="rounded-full border border-emeraldSignal/30 px-3 py-1 font-mono text-xs text-emeraldSignal">
                  Downloadable PDF
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['Georgia Tech CS', 'Research experience', 'Software and data projects'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="/resume.pdf" className="btn-primary">
                  Download Resume
                </a>
                <a href="#experience" className="btn-secondary">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
