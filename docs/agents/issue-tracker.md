# Issue tracker: Local Markdown

Issues and specs for this repo live as Markdown files in `.scratch/`.

## Conventions

- One feature per directory: `.scratch/<feature-slug>/`
- The spec is `.scratch/<feature-slug>/spec.md`
- Implementation issues are separate files at `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`.
- Record triage state in a `Status:` line near the top of each issue.
- Append conversation history under `## Comments`.

## Skill operations

- Publish an issue: create its file under `.scratch/<feature-slug>/`.
- Fetch a ticket: read the referenced file.

## Wayfinding

- Map: `.scratch/<effort>/map.md`, containing Notes, Decisions-so-far, and Fog.
- Child ticket: `.scratch/<effort>/issues/NN-<slug>.md`. Record `Type:` (`research`, `prototype`, `grilling`, or `task`) and `Status:` (`claimed` or `resolved`).
- Blocking: record `Blocked by: NN, NN`; a ticket is unblocked when those tickets are resolved.
- Frontier: choose the first numbered open, unblocked, unclaimed ticket.
- Claim: set `Status: claimed` before work.
- Resolve: add `## Answer`, set `Status: resolved`, and add a gist and link to the map's Decisions-so-far.
