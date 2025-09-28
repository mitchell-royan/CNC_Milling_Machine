# CNC Milling Machine Control System

This repository contains the source code and project files for the **CNC Milling Machine Control System**, which implements a control system using a **Raspberry Pi Pico**.

---

## Project Overview

The project is designed to control a CNC milling machine with:

- **X, Y, and Z stepper motors** using DRV8825 drivers.
- **Spindle motor speed control** via PWM.
- Manual control through a **serial terminal interface**.
- Pre-coded shape drawing: square, circle, and house.
- Absolute coordinate control using **Bresenham's Line Algorithm**.
- Limit switch handling for calibration and safety.
- Stepper motor microstepping from full-step to 1/32 microsteps.
- Fully modular **C firmware**, with an optional MATLAB GUI.

---

## Repository Structure

CC2511_Assignment3/

├─ main.c # Main firmware code

├─ PicoControlGUI.mlapp # Optional MATLAB GUI for manual and coordinate control

└─ README.md # Project overview and instructions


---

## Hardware Requirements

- **Raspberry Pi Pico**  
- **DRV8825 Stepper Drivers**  
- **Stepper motors** (X, Y, Z axes)  
- **Spindle motor** (PWM controlled)  
- Limit switches for X, Y, Z axes  
- Suitable power supply for motors and drivers  

---

## Getting Started

Usage:

Manual Control:
Use the terminal keys mapped in events.c to move X, Y, Z axes and control the spindle.

Example key mappings:

w, s → move X axis

a, d → move Y axis

f, g → move Z axis

p, o → spindle speed control

Pre-Coded Shapes
Draw shapes such as square, circle, or house using functions in drawshapes.c.

Coordinate Control
Input absolute coordinates for precise movement.

Uses Bresenham's Line Algorithm for straight-line interpolation.

Supports both positive and negative positions, with 200 steps/unit resolution.

## Features
Modular, extensible C code for future upgrades (implementation of executable G-code for standard CNC programming instead of only predefined shapes or the introduction of further harware development such as an ultrasonic sensor)

Safe operation with limit switch handling.

Multiple microstepping modes for precise movement.

MATLAB GUI support for enhanced control (optional).

## References
DRV8825 Stepper Motor Driver Datasheet

Raspberry Pi Pico Documentation
