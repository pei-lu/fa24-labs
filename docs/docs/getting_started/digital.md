---
title: Digital
parent: Getting Started
layout: default
nav_order: 2
---

# Digital
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Introduction

[*Digital*](https://github.com/hneemann/Digital) is a **gate-level digital logic hardware simulator**.
Let's break things down one at a time, starting with what a [hardware simulator](/docs/getting_started/digital#hardware-simulators) is.

## Hardware Simulators

Building hardware circuits are relatively permanent. 
If we are building a circuit out of PCBs and discrete logic chips, then this permanency isn't so important, as we can simply resolder components.
However, what about the hardware circuits that are driving the computer you're currently viewing this on?
If there is a logical error in that hardware circuit, it's nearly impossible to change the circuit to fix it.

A **hardware simulator** is a software tool used to mimic the behavior of physical hardware components or systems without needing the actual hardware.
These simulators allow engineers, students, and developers to design, test, and debug hardware architectures and systems in a virtual environment before they are built physically.

## Digital Logic Simulator

Within the hardware simulator category, there are tons of simulators that also exist for other use cases.
Some simulators are used to simulate entire CPU architectures.
Some simulators are used to simulate FPGAs.
These are all higher level hardware simulators.
The issue with these however is the lack of flexibility you have while using them.
These higher level simulators are outside the scope of this course (and most courses at UCSD) and are commonly seen used in the industry.

Our course focuses on **digital logic** simulators, a type of simulator that simulates the most basic functionality of a hardware circuit, literally down to the 0s and 1s.
These basic functionalities are abstracted away in higher level simulators, however the purpose of this course is to teach you the basic functionalities that are removed so you can get a deeper understanding for computers.

## Gate-Level Digital Logic Simulator

Once again, there are many kinds of digital logic simulators, each with different ways to use them.
A **gate-level** digital logic simulator is a kind of digital logic simulator where you create a hardware circuit using only gates (i.e AND, OR, NOT, XOR, etc.) and sequential elements (i.e flip-flops, latches, etc.)
