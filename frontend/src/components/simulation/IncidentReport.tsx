import type { Service } from '@/types/graph'
import type { SimulationEvent, SimulationMetrics } from '@/types/simulation'
import { formatRecoveryTime } from '@/simulation/metrics'
import { useMemo } from 'react'

interface IncidentReportProps {
  services: Service[]
  events: SimulationEvent[]
  metrics: SimulationMetrics | null
  disruptions: Array<{ serviceId: string }>
}

export function IncidentReport({
  services,
  events,
  metrics,
  disruptions,
}: IncidentReportProps) {
  const generatedAt = useMemo(() => new Date().toLocaleString(), [])
  const serviceMap = useMemo(
    () => new Map(services.map((s) => [s.id, s.name])),
    [services]
  )

  const initialFailures = useMemo(() => {
    return disruptions
      .map((d) => serviceMap.get(d.serviceId) ?? d.serviceId)
      .join(', ')
  }, [disruptions, serviceMap])

  if (!metrics || events.length === 0) return null

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 font-sans text-slate-900">
      {/* Title Header */}
      <div className="border-b-2 border-slate-900 pb-6 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-slate-900">
          Urban Infrastructure Cascade Report
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Generated on {generatedAt}
        </p>
      </div>

      {/* Meta Information Section */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-b border-slate-200 pb-6 text-sm">
        <div>
          <p className="font-semibold text-slate-700">Simulation Summary</p>
          <p className="mt-1 text-slate-600">
            Initial Disruptions: <span className="font-medium">{initialFailures || 'None'}</span>
          </p>
          <p className="mt-1 text-slate-600">
            Total Evaluation Duration: <span className="font-medium">{events.at(-1)?.simulationTime ?? 0}s</span>
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-slate-700">Classification</p>
          <p className="mt-1 text-red-600 font-bold uppercase tracking-wide">
            Critical Incident Assessment
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-950 pb-2">
          Key Cascade Metrics
        </h2>
        <div className="mt-4 grid grid-cols-4 gap-4 text-center">
          <div className="border border-slate-200 p-4 rounded bg-slate-50">
            <p className="text-[10px] uppercase font-bold text-slate-500">Affected Services</p>
            <p className="mt-2 text-2xl font-bold">{metrics.affectedServices}</p>
            <p className="text-[10px] text-slate-500 mt-1">{metrics.criticalServicesAffected} Critical</p>
          </div>
          <div className="border border-slate-200 p-4 rounded bg-slate-50">
            <p className="text-[10px] uppercase font-bold text-slate-500">Cascade Depth</p>
            <p className="mt-2 text-2xl font-bold">{metrics.cascadeDepth}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded bg-slate-50">
            <p className="text-[10px] uppercase font-bold text-slate-500">Recovery Time</p>
            <p className="mt-2 text-2xl font-bold">
              {metrics.recoveryTime > 0 ? formatRecoveryTime(metrics.recoveryTime) : '—'}
            </p>
          </div>
          <div className="border border-slate-200 p-4 rounded bg-slate-50">
            <p className="text-[10px] uppercase font-bold text-slate-500">System Impact</p>
            <p className="mt-2 text-2xl font-bold">{metrics.impactPercentage}%</p>
            <p className="text-[10px] text-slate-500 mt-1">{metrics.totalServices} Services Total</p>
          </div>
        </div>
      </div>

      {/* Infrastructure Status Summary */}
      <div className="mt-8">
        <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-950 pb-2">
          Infrastructure State Summary
        </h2>
        <table className="mt-4 w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-300 font-semibold text-slate-700 bg-slate-100">
              <th className="px-4 py-2">Service Component</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Criticality Rating</th>
              <th className="px-4 py-2">Final State</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-slate-150 hover:bg-slate-50">
                <td className="px-4 py-2 font-medium">{service.name}</td>
                <td className="px-4 py-2 text-slate-600">{service.category}</td>
                <td className="px-4 py-2 text-slate-600">{service.criticality} / 10</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                      service.state === 'HEALTHY'
                        ? 'bg-green-100 text-green-800'
                        : service.state === 'DEGRADED'
                          ? 'bg-amber-100 text-amber-800'
                          : service.state === 'FAILED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {service.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Timeline of Events */}
      <div className="mt-8 page-break-before">
        <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-950 pb-2">
          Sequence of Events Log
        </h2>
        <table className="mt-4 w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-300 font-semibold text-slate-700 bg-slate-100">
              <th className="px-4 py-2 w-20">Timestamp</th>
              <th className="px-4 py-2 w-48">Service Component</th>
              <th className="px-4 py-2 w-40">Event Type</th>
              <th className="px-4 py-2">Transition Details</th>
              <th className="px-4 py-2">Trigger Rationale / Reason</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => {
              const serviceName = serviceMap.get(event.serviceId) ?? event.serviceId
              return (
                <tr key={idx} className="border-b border-slate-150">
                  <td className="px-4 py-2 font-mono font-medium">T+{event.simulationTime}s</td>
                  <td className="px-4 py-2 font-medium">{serviceName}</td>
                  <td className="px-4 py-2">
                    <span className="font-bold tracking-wide text-slate-800">{event.eventType}</span>
                  </td>
                  <td className="px-4 py-2 text-slate-600">
                    {event.previousState && event.newState
                      ? `${event.previousState} ➔ ${event.newState}`
                      : '—'}
                  </td>
                  <td className="px-4 py-2 text-slate-600">{event.reason || '—'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
