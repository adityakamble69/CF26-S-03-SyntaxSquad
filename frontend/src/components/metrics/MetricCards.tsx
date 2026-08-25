import { MetricCard } from '@/components/metrics/MetricCard'
import { formatMetricValue, formatRecoveryTime } from '@/simulation/metrics'
import type { SimulationMetrics } from '@/types/simulation'

interface MetricCardsProps {
  metrics: SimulationMetrics | null
  phase: string
  baseline?: SimulationMetrics | null
}

export function MetricCards({ metrics, phase, baseline }: MetricCardsProps) {
  if (!metrics) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {['Affected Services', 'Cascade Depth', 'Recovery Time', 'System Impact'].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-dashed border-navy/15 dark:border-white/10 bg-white/60 dark:bg-[#132230]/40 px-5 py-4"
          >
            <p className="text-[10px] tracking-cinematic text-neutral dark:text-neutral/80 uppercase">{label}</p>
            <p className="mt-2 text-3xl font-light text-neutral/40 dark:text-slate-500">—</p>
          </div>
        ))}
      </div>
    )
  }

  const recoveryValue =
    metrics.recoveryTime > 0
      ? formatRecoveryTime(metrics.recoveryTime)
      : phase === 'complete'
        ? '—'
        : '—'

  // Comparison helper calculations
  const getComparison = (key: keyof SimulationMetrics, formatFn?: (v: number) => string, suffix = '') => {
    if (!baseline) return undefined
    const valBaseline = baseline[key]
    const valCurrent = metrics[key]
    const diff = Number((valCurrent - valBaseline).toFixed(1))

    const baselineValue = formatFn ? formatFn(valBaseline) : `${valBaseline}${suffix}`
    const delta = diff > 0 ? `+${diff}${suffix}` : diff === 0 ? `0${suffix}` : `${diff}${suffix}`
    const isPositiveChange = diff <= 0 // Lower/equal values are positive changes

    return {
      baselineValue,
      delta,
      isPositiveChange,
    }
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        label="Affected Services"
        value={formatMetricValue(metrics.affectedServices)}
        hint={
          metrics.criticalServicesAffected > 0
            ? `${metrics.criticalServicesAffected} critical`
            : undefined
        }
        comparison={getComparison('affectedServices', formatMetricValue)}
      />
      <MetricCard
        label="Cascade Depth"
        value={formatMetricValue(metrics.cascadeDepth)}
        comparison={getComparison('cascadeDepth', formatMetricValue)}
      />
      <MetricCard
        label="Recovery Time"
        value={recoveryValue}
        comparison={
          baseline
            ? {
                baselineValue:
                  baseline.recoveryTime > 0
                    ? formatRecoveryTime(baseline.recoveryTime)
                    : '—',
                delta:
                  metrics.recoveryTime - baseline.recoveryTime > 0
                    ? `+${metrics.recoveryTime - baseline.recoveryTime}s`
                    : metrics.recoveryTime - baseline.recoveryTime === 0
                      ? '0s'
                      : `${metrics.recoveryTime - baseline.recoveryTime}s`,
                isPositiveChange: metrics.recoveryTime - baseline.recoveryTime <= 0,
              }
            : undefined
        }
      />
      <MetricCard
        label="System Impact"
        value={`${metrics.impactPercentage}%`}
        hint={`${metrics.totalServices} total services`}
        comparison={getComparison('impactPercentage', undefined, '%')}
      />
    </div>
  )
}
