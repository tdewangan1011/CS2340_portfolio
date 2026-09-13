import { dashboardSignals } from '../data/portfolio';

const toneClasses = {
  cyan: 'border-cyanSignal/35 text-cyanSignal',
  emerald: 'border-emeraldSignal/35 text-emeraldSignal',
  violet: 'border-violetSignal/35 text-violetSignal',
  sky: 'border-sky-300/35 text-sky-300',
};

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyanSignal/10 blur-3xl" />
      <div className="dashboard-panel relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/[0.07] p-4 shadow-panel backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">Portfolio Overview</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Current Work and Interests</h3>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cyanSignal" />
            <span className="h-2.5 w-2.5 rounded-full bg-emeraldSignal" />
            <span className="h-2.5 w-2.5 rounded-full bg-violetSignal" />
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {dashboardSignals.map((signal) => (
            <div
              key={signal.label}
              className={`rounded-2xl border bg-black/20 p-4 ${toneClasses[signal.tone as keyof typeof toneClasses]}`}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{signal.label}</p>
              <p className="mt-3 text-xl font-semibold text-white">{signal.value}</p>
              <p className="mt-2 font-mono text-xs">{signal.trend}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-cyanSignal/25 bg-cyanSignal/[0.06] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Featured Project</p>
              <h4 className="mt-1 text-2xl font-semibold text-white">AsthmaAware</h4>
            </div>
            <span className="rounded-full border border-cyanSignal/40 px-3 py-1 font-mono text-xs text-cyanSignal">
              in progress
            </span>
          </div>
          <div className="mt-5 h-28 overflow-hidden rounded-xl border border-white/10 bg-[#06101c] p-3">
            <div className="relative h-full">
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
              <div className="absolute inset-y-0 left-1/3 w-px bg-white/10" />
              <div className="absolute bottom-2 left-2 h-5 w-5 animate-pulseSoft rounded-full bg-cyanSignal/70 shadow-[0_0_24px_rgba(54,244,218,0.7)]" />
              <div className="absolute left-1/3 top-4 h-3 w-3 rounded-full bg-emeraldSignal/80" />
              <div className="absolute right-8 top-1/2 h-4 w-4 rounded-full bg-violetSignal/80" />
              <svg className="h-full w-full" viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0 86 C48 70 66 42 120 52 C176 64 188 28 232 34 C278 40 294 84 340 70 C380 58 392 42 420 46"
                  fill="none"
                  stroke="rgba(54,244,218,0.85)"
                  strokeWidth="3"
                />
                <path
                  d="M0 96 C52 86 80 72 132 80 C192 92 224 50 274 58 C332 68 352 86 420 74"
                  fill="none"
                  stroke="rgba(74,222,128,0.55)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
