import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MetricCards } from './MetricCards'
import type { SimulationMetrics } from '@/types/simulation'

describe('MetricCards Component Comparison Renders', () => {
  const mockMetrics: SimulationMetrics = {
    affectedServices: 3,
    cascadeDepth: 2,
    recoveryTime: 10,
    impactPercentage: 37.5,
    criticalServicesAffected: 1,
    totalServices: 8,
  }

  const mockBaseline: SimulationMetrics = {
    affectedServices: 6,
    cascadeDepth: 4,
    recoveryTime: 20,
    impactPercentage: 75.0,
    criticalServicesAffected: 3,
    totalServices: 8,
  }

  it('renders default metrics without baseline', () => {
    render(<MetricCards metrics={mockMetrics} phase="complete" />)
    
    expect(screen.getByText('03')).toBeDefined() // Affected Services
    expect(screen.getByText('02')).toBeDefined() // Cascade Depth
    expect(screen.getByText('10s')).toBeDefined() // Recovery Time
    expect(screen.getByText('37.5%')).toBeDefined() // System Impact
    
    // Ensure no baseline text is present
    expect(screen.queryByText(/Baseline:/)).toBeNull()
  })

  it('renders side-by-side comparison and correct delta badges when baseline is provided', () => {
    render(<MetricCards metrics={mockMetrics} phase="complete" baseline={mockBaseline} />)
    
    // Check current values
    expect(screen.getByText('03')).toBeDefined()
    expect(screen.getByText('37.5%')).toBeDefined()

    // Check baseline values
    expect(screen.getByText('06')).toBeDefined()
    expect(screen.getByText('75%')).toBeDefined() // baseline is rendered as standard string

    // Check delta badges
    expect(screen.getByText('-3')).toBeDefined() // affectedServices delta (3 - 6 = -3)
    expect(screen.getByText('-2')).toBeDefined() // cascadeDepth delta (2 - 4 = -2)
    expect(screen.getByText('-10s')).toBeDefined() // recoveryTime delta (10 - 20 = -10)
    expect(screen.getByText('-37.5%')).toBeDefined() // impactPercentage delta (37.5 - 75 = -37.5)
  })
})
