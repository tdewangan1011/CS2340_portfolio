import { SectionHeader } from './SectionHeader';

const metrics = [
  { label: 'Data Sources', value: 'AQI', detail: 'air quality, weather, pollen' },
  { label: 'Data Work', value: 'Pipeline', detail: 'cleaning and structuring inputs' },
  { label: 'Interface', value: 'Maps', detail: 'location-based views' },
  { label: 'Goal', value: 'Clarity', detail: 'explain risk factors simply' },
];

export function FeaturedProject() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Project"
          title="AsthmaAware"
          description="A health and environmental data project about asthma-related risk factors such as air quality, pollen, weather, and location."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {['AI/ML', 'Public Health', 'Environmental Data', 'Forecasting', 'Maps', 'Community Health'].map((tag) => (
                <span key={tag} className="tag tag-cyan">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-8 text-3xl font-semibold text-white">AsthmaAware</h3>
            <p className="mt-4 leading-8 text-slate-300">
              AsthmaAware helps present environmental conditions that may be relevant to asthma. My work has focused
              on connecting and preparing environmental data, shaping it for analysis, and helping build clear
              map-based and dashboard-style views.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/gt-big-data/asthma-aware"
                className="btn-secondary"
                aria-label="View AsthmaAware on GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="glass-panel overflow-hidden p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyanSignal">Project Preview</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Environmental Data View</h3>
              </div>
              <span className="rounded-full bg-emeraldSignal/10 px-3 py-1 font-mono text-xs text-emeraldSignal">
                prototype
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.7fr]">
              <div className="map-panel min-h-72 rounded-3xl border border-cyanSignal/20 bg-[#06121d] p-4">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
                  <div className="absolute left-[18%] top-[30%] h-7 w-7 rounded-full bg-cyanSignal/75 shadow-[0_0_30px_rgba(54,244,218,0.85)]" />
                  <div className="absolute left-[52%] top-[42%] h-5 w-5 rounded-full bg-emeraldSignal/80 shadow-[0_0_22px_rgba(74,222,128,0.7)]" />
                  <div className="absolute right-[18%] top-[24%] h-4 w-4 rounded-full bg-violetSignal/80 shadow-[0_0_22px_rgba(167,139,250,0.7)]" />
                  <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-ink/70 px-3 py-2 backdrop-blur">
                    <p className="font-mono text-xs text-cyanSignal">map and region view</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {['Connect data sources', 'Prepare data for analysis', 'Support map-based views', 'Present risk factors clearly'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyanSignal to-emeraldSignal" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
