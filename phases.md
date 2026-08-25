# Development Phases --- Urban Infrastructure Cascade Simulator

## Phase 0 --- Project Setup

### Tasks

-   Create Vite + React + TypeScript project.
-   Configure Tailwind CSS.
-   Configure `@` path alias.
-   Install lucide-react.
-   Set up ESLint and Prettier.
-   Create Git repository.
-   Create environment variable structure.

### Deliverable

Running empty application with project structure.

------------------------------------------------------------------------

## Phase 1 --- Documentation & Architecture

### Tasks

-   Finalize PRD.
-   Finalize architecture.
-   Finalize database schema.
-   Finalize design system.
-   Finalize rules.
-   Define simulation state model.
-   Define API contracts.

### Deliverable

Approved project documentation.

------------------------------------------------------------------------

## Phase 2 --- Cinematic Landing Page

### Tasks

-   Build full-screen hero.
-   Add scroll track.
-   Add sticky viewport.
-   Add responsive navigation.
-   Add mobile menu.
-   Add cinematic typography.
-   Add scroll-driven video/frame behavior.
-   Add reduced-motion behavior.
-   Transition into simulator.

### Deliverable

Professional cinematic introduction.

------------------------------------------------------------------------

## Phase 3 --- Infrastructure Graph

### Tasks

-   Build graph renderer.
-   Create service nodes.
-   Create dependency edges.
-   Add zoom/pan.
-   Add node selection.
-   Add service details.
-   Add status visualization.
-   Seed initial infrastructure network.

### Deliverable

Interactive city infrastructure graph.

------------------------------------------------------------------------

## Phase 4 --- Simulation Engine

### Tasks

-   Define service states.
-   Implement simulation ticks.
-   Implement dependency evaluation.
-   Implement failure propagation.
-   Implement multiple simultaneous failures.
-   Implement deterministic scenario seed.
-   Implement reset.
-   Implement simulation completion.

### Deliverable

Working deterministic cascade simulator.

------------------------------------------------------------------------

## Phase 5 --- Recovery Engine

### Tasks

-   Implement recovery actions.
-   Implement recovering state.
-   Implement recovery completion.
-   Calculate recovery time.
-   Update dependent services.
-   Add recovery events.

### Deliverable

Complete failure + recovery simulation.

------------------------------------------------------------------------

## Phase 6 --- Metrics & Timeline

### Tasks

-   Calculate affected services.
-   Calculate cascade depth.
-   Calculate recovery time.
-   Calculate impact percentage.
-   Build event timeline.
-   Build metric cards.
-   Add simulation progress.

### Deliverable

Explainable simulation analytics.

------------------------------------------------------------------------

## Phase 7 --- Backend API

### Tasks

-   Create Express server.
-   Connect PostgreSQL.
-   Add service APIs.
-   Add dependency APIs.
-   Add scenario CRUD.
-   Add simulation endpoints.
-   Add validation.
-   Add error handling.

### Deliverable

Persistent application backend.

------------------------------------------------------------------------

## Phase 8 --- Database Integration

### Tasks

-   Create migrations.
-   Create seed data.
-   Store scenarios.
-   Store disruptions.
-   Store simulation events.
-   Store snapshots.
-   Store metrics.
-   Verify reproducibility.

### Deliverable

Persistent reproducible simulations.

------------------------------------------------------------------------

## Phase 9 --- Scenario Management

### Tasks

-   Scenario list.
-   Scenario details.
-   Create scenario.
-   Edit scenario.
-   Duplicate scenario.
-   Delete scenario.
-   Run saved scenario.

### Deliverable

Scenario management system.

------------------------------------------------------------------------

## Phase 10 --- Polish

### Tasks

-   Responsive testing.
-   Accessibility testing.
-   Animation optimization.
-   Graph performance optimization.
-   Loading states.
-   Empty states.
-   Error states.
-   Mobile testing.
-   Browser testing.

### Deliverable

Hackathon-ready product.

------------------------------------------------------------------------

## Phase 11 --- Testing

### Unit Tests

-   Dependency evaluation.
-   Failure propagation.
-   Recovery.
-   Cascade depth.
-   Metrics.

### Integration Tests

-   Scenario creation.
-   Simulation execution.
-   Simulation persistence.
-   Recovery actions.

### UI Tests

-   Navigation.
-   Graph interaction.
-   Simulation controls.
-   Timeline.
-   Responsive layouts.

### Deliverable

Stable release candidate.

------------------------------------------------------------------------

## Phase 12 --- Deployment

### Tasks

-   Deploy frontend.
-   Deploy backend.
-   Deploy PostgreSQL.
-   Configure environment variables.
-   Configure CORS.
-   Run migrations.
-   Seed production demo scenario.
-   Verify API.
-   Verify simulation.

### Deliverable

Public demo URL.

------------------------------------------------------------------------

## Phase 13 --- Hackathon Demo

### Demo Flow

``` text
Problem
 ↓
Cinematic introduction
 ↓
Infrastructure graph
 ↓
Select Power Grid
 ↓
Add second disruption
 ↓
Run simulation
 ↓
Watch cascade
 ↓
Show metrics
 ↓
Recover services
 ↓
Show recovery timeline
 ↓
Replay same scenario
```

### Final Deliverable

A stable, visually impressive and explainable S-03 prototype.

------------------------------------------------------------------------

## Phase 14 --- Post-MVP Enhancements

### 14.1 Export & Share Reports

-   Export simulation results as PDF/PNG/CSV.
-   Generate a shareable incident report (services affected, cascade
    depth, recovery time, timeline snapshot).

### 14.2 Scenario Comparison View

-   Run two scenarios side-by-side.
-   Compare cascade depth, affected services, and recovery time
    between runs.

### 14.3 Live / Auto-Play Mode

-   Auto-advance the simulation timeline instead of manual scrubbing.
-   Add playback speed control (0.5x / 1x / 2x).

### 14.4 Authentication & Per-User Scenarios

-   User login/signup.
-   Persist saved scenarios per authenticated user.
-   Restrict edit/delete to the owning user.

### 14.5 Alerts & Notifications Panel

-   Simulated alert feed (SMS/email-style) triggered when a critical
    service fails or cascades.
-   Alert severity levels tied to service criticality.

### 14.6 Custom Graph Builder

-   UI to add/edit/remove services and dependency edges.
-   Save custom graphs as new scenarios instead of only seed data.

### 14.7 Onboarding & Theme Polish

-   First-time user walkthrough highlighting graph, controls, and
    timeline.
-   Refine dark/light theme consistency across all panels.

### 14.8 Mobile Simulator Audit

-   Verify graph interaction (pan/zoom/select) works on small
    touch screens.
-   Adjust simulator layout for narrow viewports.

### 14.9 AI Impact Summary

-   After a simulation run, generate a plain-English summary of what
    happened (services affected, root cause, recovery outcome).

### 14.10 PWA / Downloadable App

-   Add `manifest.json` and service worker for installability.
-   Wire the "Download App" nav button to the real app/store URL.

### Deliverable

A feature-complete, installable, shareable version of the simulator
beyond the hackathon MVP.
