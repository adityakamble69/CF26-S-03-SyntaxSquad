interface MetricCardProps {
  label: string
  value: string
  hint?: string
  comparison?: {
    baselineValue: string
    delta: string
    isPositiveChange: boolean
  }
}

export function MetricCard({ label, value, hint, comparison }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-navy/10 dark:border-white/10 bg-white dark:bg-[#132230] px-5 py-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] tracking-cinematic text-neutral dark:text-neutral/80 uppercase">{label}</p>
        {comparison && (
          <span
            className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold ${
              comparison.isPositiveChange
                ? 'bg-success/15 text-success dark:bg-success/25'
                : 'bg-critical/15 text-critical dark:bg-critical/25'
            }`}
          >
            {comparison.delta}
          </span>
        )}
      </div>
      <p className="mt-2 text-3xl font-light tabular-nums text-navy dark:text-white">{value}</p>
      {comparison ? (
        <p className="mt-1 text-xs text-neutral dark:text-neutral/60">
          Baseline: <span className="font-medium text-navy dark:text-white">{comparison.baselineValue}</span>
        </p>
      ) : hint ? (
        <p className="mt-1 text-xs text-neutral dark:text-neutral/60">{hint}</p>
      ) : null}
    </div>
  )
}
