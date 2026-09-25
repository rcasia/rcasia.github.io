# AGENTS.md

These rules are mandatory for any agent working in this repository.

## Branch and repository state

- Work in the worktree / branch / directory the user indicates (often a `t3code/*` worktree). Do not switch branches automatically.
- Before starting, check the current branch, the worktree status, and the recent commits.
- The upstream reference is `origin/main`. Keep your working version close to it: fetch `origin` and compare (e.g. `git rev-list --left-right --count HEAD...origin/main`). If you are behind or significantly diverged, stop and ask for instructions.
- If there are local changes you did not create, do not revert or overwrite them. Stop if they interfere with the work and ask for clarification.
- Keep `main` always deployable.
- Do not use destructive commands such as `git reset --hard` or `git checkout --`.
- Do not push to `main` until you have run the relevant local checks and confirmed the change works.

## Language and content

- All content in this repo must be in English.
- If you find anything in Spanish, translate it to English.
- This applies to UI copy, pages, blog posts, projects, metadata, docs, comments, and commit messages.
- Preserve proper names and their diacritics (e.g. `Ricardo Casía Moka`); do not "translate" or strip-accents them.
- Never use the em-dash (`—`) in any content: pages, blog posts, projects, metadata, docs, comments, or commit messages. It reads as AI-generated filler. Restructure the sentence with a period, a colon, or a plain comma instead.
- The hyphen (`-`) is for compound words and the en-dash (`–`) for ranges only; neither is a substitute for the em-dash in prose.

## Before implementing

- First inspect the stack, the architecture, the conventions, and the affected code.
- Define the scope and the acceptance criteria before editing.
- If context is missing, there are several reasonable interpretations, or the change may affect production, stop and ask for clarification. Do not assume.
- Do not modify pages, modules, or settings outside the requested scope.
- Do not add external dependencies without an explicit and justified need.

## Implementation

- Make small, focused, and reversible changes.
- Preserve existing naming, structure, and tooling conventions.
- Do not duplicate business logic, data access, or resource selection when it can be clearly shared.
- Keep experimental changes behind a feature flag when they must coexist with the stable implementation.
- Feature flags must be disabled by default.
- A feature flag is an experimentation mechanism, not an authorization or security mechanism.
- Do not add visible controls, copy, metadata, or navigation elements for a flag that must be invisible to visitors.
- Remove the flag and the old path once the experimental functionality becomes the stable implementation, unless there is a documented reason to keep them.

## Local verification

- Run the appropriate checks for the change: lint, types, tests, build and, when applicable, a functional verification.
- Explicitly verify the stable and experimental paths when there is a feature flag.
- Do not consider a change validated just because there were no obvious errors during editing.
- If a check cannot be executed, document the command, the reason, and the impact on validation confidence.

## Commits

- Each commit must be small, atomic, and represent a single logical change.
- Do not mix unrelated refactors, mass formatting, or dependency changes with the work in progress.
- Use Conventional Commits messages, for example: `feat(projects): add browser-controlled experiment flag`.
- Review `git status`, `git diff`, and recent history before creating a commit.
- Do not include secrets, generated artifacts, or unrelated changes.

## Push and CI/CD pipeline

Pipeline validation is part of the definition of done. The mandatory sequence is:

```text
implement
-> local checks
-> atomic commit
-> push to main
-> observe pipeline
-> verify successful pipeline
-> task done
```

After each `push` to `main`:

1. Identify the pipeline corresponding to the commit you just sent.
2. Use the pipeline observer available in the environment to check its status.
3. Wait for it to finish when necessary.
4. Check that the relevant stages have finished correctly.
5. If it fails, inspect the result and determine whether the failure is related to the change.
6. Fix issues that are the agent's responsibility.
7. Repeat local validation, make an additional atomic commit if applicable, and check the pipeline again.
8. Do not consider the task done while the corresponding pipeline is still failing, unless the failure is clearly unrelated to the change and documented.

The absence of local errors does not equal completed CI/CD validation. If the pipeline observer is unavailable, fails, or does not allow determining the pipeline status, state this explicitly and do not claim that CI/CD validation is complete.

## Definition of done

A change is only done when:

- it meets the scope and acceptance criteria;
- the affected paths have been verified locally;
- there is an atomic commit if the authorized work includes commit;
- the change sent to `main` has an identified and correctly processed pipeline;
- any external failure, limitation, or pending validation is documented;
- there are no unexplained accidental changes or artifacts left in the working tree.
