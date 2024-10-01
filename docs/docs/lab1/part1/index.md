---
title: Part 1
parent: Lab 1
layout: default
nav_order: 1
---

# Conventional Alarm Clock
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

Brief
{: .text-delta}
> Your journey begins by designing a conventional alarm clock using *Digital*, and learning the basics of digital timekeeping.

## Goals

1. Learn how to use *Digital*
2. Create a clock capable of:
    - Displaying the current time
    - Setting the current time
    - Setting the alarm time
    - Sounding an alarm at a user-defined time

## Circuit Structure

{: .warning}
Failure to follow this structure can result in grading of the lab to be delayed or incorrect.

Your main *Digital* circuit should be named as `ConventionalAlarmClock`.
The following ports should be opened for the `ConventionalAlarmClock`:

| Port Direction | Port Name       | Active | Port Width (bits) | Description                                                             |
|:--------------:|-----------------|:------:|------------------:|-------------------------------------------------------------------------|
|      INPUT     | `CLK`           | Rising |                 1 | Clock input used for the alarm clock                                    |
|      INPUT     | `CLR`           |  High  |                 1 | Resets the alarm clock                                                  |
|      INPUT     | `SETUP_TIME`    |  High  |                 1 | Allows the user to set the time using `MIN_ADV` and `HR_ADV`            |
|      INPUT     | `SETUP_ALARM`   |  High  |                 1 | Allows the user to set the alarm using `MIN_ADV` and `HR_ADV`           |
|      INPUT     | `MIN_ADV`       |  High  |                 1 | Increments the minute signal whenever either `SETUP` signals are active |
|      INPUT     | `HR_ADV`        |  High  |                 1 | Increments the hour signal whenever either `SETUP` signals are active   |
|      INPUT     | `ALARM_EN`      |   Low  |                 1 | Enables the buzzer when the alarm time is reached                       |
|     OUTPUT     | `SECONDS`       |    -   |                 6 | The current seconds the alarm clock has stored                          |
|     OUTPUT     | `MINUTES`       |    -   |                 6 | The current minutes the alarm clock has stored                          |
|     OUTPUT     | `HOURS`         |    -   |                 5 | The current hours the alarm clock has stored                            |
|     OUTPUT     | `ALARM_MINUTES` |    -   |                 6 | The minute that the alarm clock is set to `BUZZ` at                     |
|     OUTPUT     | `ALARM_HOURS`   |    -   |                 5 | The hour that the alarm clock is set to `BUZZ` at                       |
|     OUTPUT     | `BUZZ`          |  High  |                 1 | Signal to buzz an external alarm when the alarm time is reached         |
|     OUTPUT     | `SEG_SECONDS`   |    -   |                14 | Seven segment signal for the seconds the alarm clock has displayed      |
|     OUTPUT     | `SEG_MINUTES`   |    -   |                14 | Seven segment signal for the minutes the alarm clock has displayed      |
|     OUTPUT     | `SEG_HOURS`     |    -   |                14 | Seven segment signal for the hours the alarm clock has displayed        |

## Deliverables
- `ConventionalAlarmClock.dig`
- `ConventionalAlarmClock.v`
