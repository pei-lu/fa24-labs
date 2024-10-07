---
title: Part 1
parent: Lab 2
layout: default
nav_order: 3
---

# Booth's Multiplier
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Goals

1. Create a Booth's multiplier
2. Optimize the adder circuitry
3. Ensure correctness for all values of the Booth's multiplier

## Circuit Structure

{: .warning}
Failure to follow this structure can result in grading of the lab to be delayed or incorrect.

Your main *Digital* circuit should be named as `BoothsMultiplier`.
The following ports should be opened for the `BoothsMultiplier`:

| Port Direction | Port Name       | Active | Port Width (bits) | Description                                                             |
|:--------------:|-----------------|:------:|------------------:|-------------------------------------------------------------------------|
|      INPUT     | `CLK`           | Rising |                 1 | Clock input used for the alarm clock                                    |
|      INPUT     | `CLR`           |  High  |                 1 | Resets the alarm clock                                                  |
|      INPUT     | `MULTIPLIER`    |    -   |                13 | Allows the user to set the time using `MIN_ADV` and `HR_ADV`            |
|      INPUT     | `MULTIPLICAND`  |    -   |                13 | Allows the user to set the alarm using `MIN_ADV` and `HR_ADV`           |
|     OUTPUT     | `RESULT`        |    -   |                26 | Seven segment signal for the seconds the alarm clock has displayed      |
|     OUTPUT     | `EX_OP`         |    -   |                 1 | Seven segment signal for the seconds the alarm clock has displayed      |
|     OUTPUT     | `SIGN`          |    -   |                 1 | Seven segment signal for the seconds the alarm clock has displayed      |
|     OUTPUT     | `PARTIAL_SUM`   |    -   |                26 | Seven segment signal for the minutes the alarm clock has displayed      |
|     OUTPUT     | `DONE`          |    -   |                 1 | Seven segment signal for the hours the alarm clock has displayed        |

## Deliverables
- `BoothsMultiplier.dig`
- `BoothsMultiplier.v`
