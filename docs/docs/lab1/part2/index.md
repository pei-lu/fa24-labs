---
title: Part 2
parent: Lab 1
layout: default
nav_order: 2
---

# The French Republican Calendar Alarm Clock
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

Brief
{: .text-delta}
> Next, you will tackle a more challenging task: implementing an alternative version of the alarm clock that conforms to the structure of the French Republican Calendar.

## Goals

1. Learn how to use *Digital*
2. Create a French Republican clock capable of:
    - Displaying the current French Republican time
    - Setting the current French Republican time
    - Setting the alarm French Republican time
    - Sounding an alarm at a user-defined French Republican time

## Resources
[French Republican Calendar Wiki](https://en.wikipedia.org/wiki/French_Republican_calendar)

## Circuit Structure

{: .warning}
Failure to follow this structure can result in grading of the lab to be delayed or incorrect.

Your main *Digital* circuit should be named as `FrenchRepublicanAlarmClock`.
The following ports should be opened for the `FrenchRepublicanAlarmClock`:

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
|     OUTPUT     | `SEG_SECONDS`   |    -   |                14 | Seven segment signal for the current seconds the alarm clock has stored |
|     OUTPUT     | `SEG_MINUTES`   |    -   |                14 | Seven segment signal for the current minutes the alarm clock has stored |
|     OUTPUT     | `SEG_HOURS`     |    -   |                14 | Seven segment signal for the current hours the alarm clock has stored   |

## Deliverables
- `FrenchRepublicanAlarmClock.dig`
- `FrenchRepublicanAlarmClock.v`
