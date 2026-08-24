# Urban Infrastructure Cascade Simulator

An interactive web-based simulator for understanding how failures
propagate through interconnected urban infrastructure.

## Problem Statement

**S-03 --- Urban Infrastructure Cascade Simulator**

Urban services are interconnected. A failure in one digital or
operational service can propagate into other services, creating
cascading failures.

This project represents urban services as a dynamic dependency graph and
simulates disruption propagation, failure, recovery, and system impact.

## Key Requirements

-   Dynamic infrastructure graph.
-   Time-dependent system state.
-   Failure simulation.
-   Recovery simulation.
-   Multiple simultaneous disruptions.
-   Cascade depth.
-   Affected services.
-   Recovery time.
-   Reproducible simulation scenarios.

## Product Concept

The application has two main experiences.

### 1. Cinematic Introduction

A premium scroll-driven visual experience introduces the problem.

``` text
City
 ↓
Interconnected Infrastructure
 ↓
Failure
 ↓
Cascade
 ↓
Simulation
```

### 2. Interactive Simulator

Users can: - View infrastructure dependencies. - Select disruptions. -
Run simulations. - Watch failure propagation. - Inspect simulation
time. - Apply recovery actions. - View metrics. - Replay scenarios.

## Example

``` text
Power Grid
     │
 ┌───┼────────┐
 ↓   ↓        ↓
Hospital  Water  Transport
    │             │
    └──────┬──────┘
           ↓
      Emergency
```

If the Power Grid fails, the simulator evaluates dependent services and
records the resulting cascade.

## Metrics

The MVP measures:

  Metric              Description
  ------------------- ---------------------------------
  Affected Services   Number of services impacted
  Cascade Depth       Maximum propagation depth
  Recovery Time       Time required for stabilization
  System Impact       Overall impact percentage

## Technology

### Frontend

-   Vite
-   React 18
-   TypeScript
-   Tailwind CSS 3
-   lucide-react

### Backend

-   Node.js
-   Express
-   TypeScript

### Database

-   PostgreSQL

## Project Structure

``` text
urban-infrastructure-cascade/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── simulation/
│   │   └── server.ts
│   └── package.json
│
├── PRD.md
├── architecture.md
├── database.md
├── design.md
├── phases.md
├── rules.md
├── memory.md
└── README.md
```

## Documentation System

  File              Purpose
  ----------------- --------------------------------------------------
  PRD.md            Product requirements and scope
  architecture.md   Application architecture and technical structure
  database.md       Database schema and data model
  design.md         UI, typography, colors and visual rules
  phases.md         Development roadmap
  rules.md          Development constraints
  memory.md         Current project state and decisions
  README.md         Project overview and setup

## Development Roadmap

``` text
Phase 0  Setup
   ↓
Phase 1  Documentation
   ↓
Phase 2  Cinematic Landing
   ↓
Phase 3  Infrastructure Graph
   ↓
Phase 4  Simulation Engine
   ↓
Phase 5  Recovery
   ↓
Phase 6  Metrics & Timeline
   ↓
Phase 7  Backend API
   ↓
Phase 8  Database
   ↓
Phase 9  Scenario Management
   ↓
Phase 10 Polish
   ↓
Phase 11 Testing
   ↓
Phase 12 Deployment
   ↓
Phase 13 Hackathon Demo
```

## Local Development

### Frontend

``` bash
cd frontend
npm install
npm run dev
```

### Database

After setting `DATABASE_URL` in `backend/.env`, create the schema and load the
deterministic demo network:

``` bash
cd backend
npm run migrate
npm run seed
```

### Backend

``` bash
cd backend
npm install
npm run dev
```

### Environment

Create `.env` files for environment-specific values.

Example:

``` env
DATABASE_URL=your_database_url
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

Never commit secrets.

## Demo Scenario

The initial demonstration uses a **Power Grid Failure**.

Flow:

``` text
Power Failure
     ↓
Dependency Evaluation
     ↓
Cascade Propagation
     ↓
Affected Services
     ↓
Recovery
     ↓
System Stabilized
```

## Design Philosophy

The product should feel:

**Cinematic + Technical + Premium + Data-driven**

It should avoid looking like a generic admin dashboard.

The visual experience introduces the problem; the simulator proves the
solution.

## Project Status

**Current status:** Phases 0-9 complete / polish ready.

**Current phase:** Phase 9 completed.

**Next:** Polish responsive, accessibility, and UI state handling.

## License

Add the final project license before public release.
