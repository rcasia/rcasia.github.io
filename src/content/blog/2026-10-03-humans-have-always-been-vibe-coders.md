---
title: 'Humans Have Always Been Vibe Coders'
description: 'Vibe coding is not an AI invention. It is what happens when development relies on intuition without a system to make that intuition dependable.'
date: 2026-10-03
tags: ['vibe-coding', 'agentic-coding', 'agile', 'ci-cd', 'software-engineering']
categories: ['programming']
---

The phrase *vibe coding* sounds new because it became popular alongside AI coding tools. The behavior is not new.

Humans have always written software by following a mixture of memory, intuition, pattern recognition, and hope. We form a mental model of the system, make a change that feels right, run a few checks, and move on. Sometimes that is enough. Sometimes the change reaches production carrying a bug that nobody imagined until a user finds it.

The industry did not respond to this problem by making human developers perfectly deterministic. It built systems around them: version control, pull requests, code reviews, automated tests, continuous integration, staged releases, observability, and operational runbooks. Agile practices added feedback loops and smaller batches. CI/CD added repeatable gates between a change and its consequences.

In that sense, Agile and CI/CD were not the end of vibe coding. They were the organizational response to it.

## Vibe coding is a process problem

Vibe coding is often described as a property of the person writing the code. A developer is said to be vibe coding when they make changes without a plan, without tests, or without understanding the whole system.

That description is useful, but incomplete. The more important question is what surrounds the developer.

A developer can make an intuitive change inside a disciplined system. The change can be small, reviewed by another person, checked by a test suite, built in a clean environment, deployed gradually, and monitored after release. The developer still used judgment and incomplete information. The surrounding system made the result safer.

The reverse is also possible. A developer can follow a detailed ticket in a repository with no tests, no review, no deployment checks, and no way to detect regressions. The work may look formal, but it is still dependent on one person's unverified mental model.

The distinction is not whether a human or an AI wrote the code. It is whether the work is harnessed by a reliable process.

## The deterministic human developer was always an illusion

Software engineering likes to tell a story about deterministic machines being operated by deterministic procedures. Give a competent developer a specification and they will produce the intended implementation.

Real development has never worked that way.

Specifications are incomplete. Requirements conflict. Codebases contain assumptions that were never documented. Names are misleading. Dependencies change. Tests cover only some behaviors. Developers forget things, misread things, and infer details that were never actually agreed upon.

Human reasoning is probabilistic. We make predictions based on experience and available context. We fill gaps with plausible assumptions. We are vulnerable to confirmation bias, fatigue, interruptions, and local optimizations that look correct from inside one file.

That does not make human developers useless. It explains why engineering practices exist.

If humans were naturally deterministic coders, there would be little need for pull requests or code reviews. A second person would add no information. If human reasoning reliably produced correct software from raw requirements, there would be no need for CI pipelines, regression tests, release gates, or production monitoring.

These practices exist because individual judgment is valuable but insufficient.

## Agentic coding is a system, not a tool category

Agentic coding is sometimes presented as the opposite of human coding. That framing makes the central idea harder to see.

Agentic coding is an organizational system in which humans or agents produce software inside explicit conditions, guardrails, and rules. The author can be a person, a language model, or both. What matters is the structure around the author.

That structure can include:

- A clear task boundary and acceptance criteria
- Repository instructions and architectural constraints
- Access limited to the files and systems that are relevant
- Automated formatting, type checks, tests, and builds
- Review from a person or another independent verification process
- Small changes that are easy to inspect and revert
- Deployment gates and post-deployment observability

The more capable the author becomes, the less reasonable it is to remove these controls. Faster code generation increases the rate at which both good and bad changes can be produced. A system that was merely uncomfortable with one unreviewed change can become unsafe when it accepts hundreds of them per hour.

## Why the AI comparison is still useful

None of this means that human developers and AI models fail in exactly the same way. They do not.

Models can generate code at a different speed and scale. They can lose important context across a long task, confidently invent APIs, repeat patterns that are locally plausible but globally wrong, and make many coordinated changes before a human has inspected the first one. They also introduce new questions about permissions, provenance, and accountability.

Those differences matter. They make strong engineering systems more important, not less.

The useful comparison is that both humans and models are prediction systems operating with incomplete information. Neither should be trusted merely because its output sounds confident. Both need feedback from the environment and checks that are independent of the author's intuition.

An AI agent without tests, repository constraints, or review is not magically agentic in the engineering sense. It is simply a faster form of vibe coding. A human developer with those same missing controls is doing the same thing at a slower rate.

## Agile and CI/CD were early agentic systems

Agile is often reduced to ceremonies, and CI/CD is often reduced to automation. Their deeper contribution is that they move correctness away from a single person's private judgment.

Agile encourages short feedback loops, visible work, incremental delivery, and regular correction of assumptions. CI/CD turns parts of the engineering process into repeatable checks. Code review creates a second perspective. Observability tests the assumptions that survived development and deployment.

Together, these practices create a system that can tolerate imperfect authors. They do not require every developer to remember every rule or predict every failure. They make important constraints visible, executable, and difficult to skip.

This is what makes them relevant to AI-assisted development. We do not need a new philosophy that assumes agents are perfectly reliable. We need to extend the same engineering lesson: put unreliable judgment inside a system that provides useful feedback and limits the cost of mistakes.

## The practical lesson

The answer to vibe coding is not to shame the person or agent producing the code. It is to improve the conditions under which code is produced.

Before asking whether a developer or an AI agent can be trusted, ask better questions:

- What does the author need to know before making the change?
- Which assumptions can be checked automatically?
- What is the smallest change that proves the approach?
- Who or what provides an independent review?
- How will we know if the change fails after release?
- How quickly can we revert it?

These questions apply equally to a solo developer, a large team, and an autonomous coding agent.

The future of software engineering will not be a contest between human coding and AI coding. It will be a contest between unsystematic work and systematic work. Humans will continue to use intuition. Agents will continue to produce plausible output. Reliable teams will be the ones that turn both into inputs to a process rather than treating either as a source of truth.

Vibe coding is not a new era. It is the default state of development when no system is present. Agentic coding is what happens when we finally take the system seriously.
