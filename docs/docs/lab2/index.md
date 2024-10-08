---
title: Lab 2
layout: katex
nav_order: 4
---

# Booth's Multiplication and Boolean Algebra
{: .no_toc}

#### Assigned
{: .no_toc}
October 9th, 2024

#### Due
{: .no_toc}
October 21st, 2024

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

{: .warning}
This is an unfinished lab.
Anything here is subject to change without notice.

## Lore

Over the summer, you find yourself interning at NumeriCorp, a hardware company which specializes in devising hardware implementations of common arithmetic and numerical algorithms.
While you are excited about the application areas that they are working in as it will give you a nice forum to practice the skills that you learned in CSE 140(L), you are concerned a bit about NumeriCorp's reputation.
The gossip is that they cut corners and while they produce solutions fast and cheap, they do not always
work for every corner case.
Indeed, to your dismay you notice that the company has unilaterally modified the two's complement representation slightly, clipping it down to the symmetric range of  $(-2^{(n-1)}, 2^{(n-1)})$ for an $n$ bit number by simply declaring the smallest representable number invalid.
You remember the rigor of the CSE 140(L) class you had taken in your days of youth that had fueled your love for precision and are dismayed at such redefinitions, but you plug on as the boom cycles of the late 2010s have long since transmuted into a bust cycle where jobs are hard to find.

Your first assignment as an intern is to implement a two's-complement multiplier based on Booth's multiplication algorithm. In Parts 1, 2, 3, and 4 of the LogicWorks Implementation section, you are asked to build a 13-bit two's complement multiplier in LogicWorks using Booth’s Algorithm for non-zero inputs (zero inputs are efficiently handled upfront by being detected, obviating the need to conduct the more lengthy, time-consuming standard multiplication algorithms).
NumeriCorp provides you (below) with background training on the general traits of multiplication algorithms, leading gradually into the particularities of Booth's algorithm.
The bulk of the ideas and optimizations presented are fundamental and constitute the basis for Booth’s algorithm which you will eventually implement.

## Goals
The goal of this lab is to teach you how computers perform signed integer multiplication.
This is a fundamental concept of digital logic.
Additionally, we hope to introduce a simple and trivial part of boolean optimization.
The lab will be divided into 2 parts:

1. **Booth's Multiplier**
2. **Logical Equvialence Checking**

## Lab Report

Please write a lab report that contains the following information:
- Your name(s) and PID(s)
- Pictures of your final circuits for each part (including embedded circuits)
- Answers to lab questions posed throughout the lab.

{: .highlight-title}
> Lab Report
>
> Questions throughout the lab will be enclosed in a box like this with the title **Lab Report**

## Deliverables

Please submit the following files to Gradescope **individually**:

- `BoothsMultiplierPart1.v`
- `BoothsMultiplierPart2.v`
- `BoothsMultiplierPart3.v`
- `BoothsMultiplierPart4.v`
- `LogicalEquivalenceChecking.v`
- All `.dig` files you have created 
- PDF of your [lab report](#lab-report)

## Grading

* [Part 1](https://cse140l.github.io/fa24-labs/docs/lab2/part1): 18%
* [Part 2](https://cse140l.github.io/fa24-labs/docs/lab2/part2): 18%
* [Part 3](https://cse140l.github.io/fa24-labs/docs/lab2/part3): 18%
* [Part 4](https://cse140l.github.io/fa24-labs/docs/lab2/part4): 18%
* [Part 5](https://cse140l.github.io/fa24-labs/docs/lab2/part5): 18%
* [Lab Report](#lab-report): 10%
