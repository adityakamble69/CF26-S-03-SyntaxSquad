import { describe, expect, it } from 'vitest'
import { generateSimulationCSV } from './exportHelpers'
import type { SimulationEvent } from '@/types/simulation'
import type { Service } from '@/types/graph'

describe('Simulation Export Helpers', () => {
  it('should format headers and events correctly into CSV rows', () => {
    const services: Service[] = [
      {
        id: 'svc-power',
        name: 'Power Grid',
        slug: 'power-grid',
        category: 'Energy',
        criticality: 5,
        description: 'Primary power distribution',
        state: 'HEALTHY',
      },
      {
        id: 'svc-water',
        name: 'Water Supply',
        slug: 'water-supply',
        category: 'Water',
        criticality: 4,
        description: 'Water treatment plant',
        state: 'HEALTHY',
      },
    ]

    const events: SimulationEvent[] = [
      {
        simulationTime: 0,
        serviceId: 'svc-power',
        eventType: 'FAILURE',
        previousState: 'HEALTHY',
        newState: 'FAILED',
        reason: 'Transformer explosion',
      },
      {
        simulationTime: 1,
        serviceId: 'svc-water',
        eventType: 'PROPAGATION',
        previousState: 'HEALTHY',
        newState: 'FAILED',
        reason: 'Loss of power at treatment pump, causing pressure drop',
      },
    ]

    const csv = generateSimulationCSV(events, services)
    const lines = csv.split('\n')

    expect(lines[0]).toBe('Time (s),Service Name,Event Type,Previous State,New State,Reason')
    
    // Check first event row
    expect(lines[1]).toBe('0,Power Grid,FAILURE,HEALTHY,FAILED,Transformer explosion')
    
    // Check second event row with escaped comma in reason
    expect(lines[2]).toBe('1,Water Supply,PROPAGATION,HEALTHY,FAILED,"Loss of power at treatment pump, causing pressure drop"')
  })
})
