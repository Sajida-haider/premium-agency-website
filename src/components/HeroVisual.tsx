import { ArrowUpRight, Bolt, Sparkles } from "@/components/icons";

function AreaChart() {
  return (
    <svg viewBox="0 0 400 160" className="w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M0 120 C40 96, 70 108, 105 88 S160 70, 195 78 S250 40, 290 52 S345 30, 400 22 V160 H0 Z"
        fill="url(#areaFill)"
      />
      <path
        d="M0 120 C40 96, 70 108, 105 88 S160 70, 195 78 S250 40, 290 52 S345 30, 400 22"
        fill="none"
        stroke="url(#lineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="290" cy="52" r="5" fill="#34d399" />
      <circle cx="290" cy="52" r="10" fill="#34d399" opacity="0.25" />
    </svg>
  );
}

function MiniBars() {
  return (
    <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
      {[40, 65, 50, 80, 55, 90, 70, 100, 75, 60, 85, 68].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary-500/70 to-iris-400/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Glow behind panel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary-500/20 via-transparent to-iris-500/20 blur-2xl"
      />

      <div className="rounded-3xl p-1.5 glass">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex h-7 items-center rounded-lg bg-white/5 px-8 text-xs text-muted">
            app.aurelia.io/dashboard
          </div>
          <div className="hidden sm:block">
            <span className="rounded-lg bg-primary-400/15 px-2.5 py-1 text-[11px] font-medium text-primary-300">
              Live
            </span>
          </div>
        </div>

        {/* Panel body */}
        <div className="rounded-[1.4rem] bg-surface/60 p-5 sm:p-6">
          {/* Header row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted">Monthly revenue</p>
              <p className="mt-1 flex items-center gap-2 text-3xl font-semibold tracking-tight text-ink">
                $128,460
                <span className="flex items-center gap-0.5 rounded-full bg-primary-400/15 px-2 py-0.5 text-xs font-medium text-primary-300">
                  <ArrowUpRight className="h-3 w-3" /> 24.8%
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-muted transition-colors hover:bg-white/10 hover:text-ink">
                Last 30 days
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs text-muted transition-colors hover:bg-white/10 hover:text-ink">
                <Bolt className="h-3.5 w-3.5 text-primary-400" />
                Auto-report
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-5">
            <AreaChart />
          </div>

          {/* Bottom cards */}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">Active users</p>
                <Sparkles className="h-4 w-4 text-iris-400" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-ink">48,210</p>
              <p className="mt-1 text-xs text-primary-400">+12.4% this week</p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">Automations</p>
                <Bolt className="h-4 w-4 text-primary-400" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-ink">1,204</p>
              <p className="mt-1 text-xs text-primary-400">38 running now</p>
            </div>
            <div className="hidden rounded-2xl bg-white/[0.03] p-4 sm:block">
              <p className="text-xs text-muted">Weekly volume</p>
              <MiniBars />
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="absolute -left-6 top-24 hidden animate-float rounded-2xl glass-strong p-4 shadow-xl md:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-teal-400">
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Signal detected</p>
            <p className="text-xs text-primary-400">+18% revenue opportunity</p>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -right-6 bottom-10 hidden animate-float rounded-2xl glass-strong p-4 shadow-xl [animation-delay:2.5s] md:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
          </span>
          <p className="text-xs font-medium text-ink">Workflow completed</p>
        </div>
        <p className="mt-1 text-xs text-muted">Report sent · 2 minutes ago</p>
      </div>
    </div>
  );
}
