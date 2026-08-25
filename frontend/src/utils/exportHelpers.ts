import type { SimulationEvent } from '@/types/simulation'
import type { Service } from '@/types/graph'

export function generateSimulationCSV(events: SimulationEvent[], services: Service[]): string {
  const serviceMap = new Map(services.map((s) => [s.id, s.name]))

  const headers = ['Time (s)', 'Service Name', 'Event Type', 'Previous State', 'New State', 'Reason']
  const escapeCSVValue = (val: string | number | undefined | null) => {
    if (val === undefined || val === null) return ''
    const str = String(val)
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const rows = events.map((event) => {
    const serviceName = serviceMap.get(event.serviceId) ?? event.serviceId
    return [
      event.simulationTime,
      serviceName,
      event.eventType,
      event.previousState ?? '—',
      event.newState ?? '—',
      event.reason ?? '—',
    ].map(escapeCSVValue).join(',')
  })

  return [headers.join(','), ...rows].join('\n')
}

export function downloadSimulationCSV(events: SimulationEvent[], services: Service[]): void {
  const csvContent = generateSimulationCSV(events, services)
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `infrastructure-simulation-report-${Date.now()}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function triggerReportPDF(): void {
  window.print()
}
