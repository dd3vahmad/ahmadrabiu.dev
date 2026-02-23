---
title: "pomodoro"
summary: "A DOS terminal-based Pomodoro timer implemented as a TSR using x86 assembly and hardware interrupts."
date: "Sep 14 2025"
draft: false
banner: "/blog/pomodoro-timer-cover.png"
tags:
  - x86 Assembly
  - DOS
  - Systems Programming
  - Productivity
repoUrl: https://github.com/dd3vahmad/pomodoro
---

This project was built as a practice project for **CSC 204 – x86 Assembly**, with the goal of going beyond toy examples and writing a real, interactive system-level program.

**pomodoro** is a Pomodoro timer implemented as a **Terminate-and-Stay-Resident (TSR)** program in real-mode DOS. It hooks directly into hardware interrupts to provide a background countdown timer with work and rest cycles, rendered in VGA text mode.

The project focuses on low-level control, timing accuracy, and safe interrupt handling.

## Features

- **Countdown Timer**
  Starts at 25 minutes for work sessions and decrements using ~55ms ticks driven by the hardware timer.

- **Work & Rest Cycles**
  Supports active work sessions (25 minutes), short breaks (5 minutes), and long breaks (15 minutes after every 4 cycles).

- **Interrupt-Driven Controls**
  Hooks into:
  - **IRQ0 (Timer interrupt)** for precise time tracking
  - **IRQ1 (Keyboard interrupt)** for real-time user input

- **Keyboard Controls**
  - `S`, `C`, or `Space`: Start / toggle pause
  - `P`: Pause / unpause
  - `R`: Reset timer to 25:00:000

- **VGA Text Display**
  Real-time MM:SS:MS display rendered directly in 80×25 text mode.

- **TSR Execution**
  Runs in the background as a memory-resident program.

## Running the Project

The program is designed to run in a DOS-compatible environment such as **DOSBox**.

```bash
nasm pomodoro.asm -o pomodoro.com
pomodoro.com
```

Once started, the timer responds instantly to keyboard input while remaining resident in memory.

## Key Learnings

- Real-mode interrupt handling and safe IRQ chaining
- Writing TSR programs without breaking DOS input or timing
- Dealing with NASM constraints such as short jump ranges
- Precise timing using the hardware timer
- Direct manipulation of VGA text memory

This project was an exploration of how much functionality can be built with minimal abstractions—and how unforgiving low-level systems programming can be.
