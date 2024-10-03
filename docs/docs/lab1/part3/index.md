---
title: Part 3
parent: Lab 1
layout: default
nav_order: 3
---

# The French Republican Calendar
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

Brief
{: .text-delta}
> In this part, you will extend the alarm clock to keep track of the day of the week, week of the month, and month of the year in the French Republican Calendar.

## Goals

1. Learn how to use *Digital*
2. Create a French Republican Calendar

## Resources
[French Republican Calendar Wiki](https://en.wikipedia.org/wiki/French_Republican_calendar)

## Circuit Structure

{: .warning}
Failure to follow this structure can result in grading of the lab to be delayed or incorrect.

Your main *Digital* circuit should be named as `FrenchRepublicanCalendarAlarmClock`.
The following ports should be opened for the `FrenchRepublicanCalendarAlarmClock`:

| Port Direction | Port Name       | Active | Port Width (bits) | Description                                                             |
|:--------------:|-----------------|:------:|------------------:|-------------------------------------------------------------------------|
|      INPUT     | `CLK`           | Rising |                 1 | Clock input used for the alarm clock                                    |
|      INPUT     | `CLR`           |  High  |                 1 | Resets the alarm clock                                                  |
|      INPUT     | `SETUP_TIME`    |  High  |                 1 | Allows the user to set the time using `MIN_ADV` and `HR_ADV`            |
|      INPUT     | `SETUP_ALARM`   |  High  |                 1 | Allows the user to set the alarm using `MIN_ADV` and `HR_ADV`           |
|      INPUT     | `MIN_ADV`       |  High  |                 1 | Increments the minute signal whenever either `SETUP` signals are active |
|      INPUT     | `HR_ADV`        |  High  |                 1 | Increments the hour signal whenever either `SETUP` signals are active   |
|      INPUT     | `DAY_ADV`       |  High  |                 1 | Increments the day signal whenever either `SETUP` signals are active    |
|      INPUT     | `WEEK_ADV`      |  High  |                 1 | Increments the week signal whenever either `SETUP` signals are active   |
|      INPUT     | `MONTH_ADV`     |  High  |                 1 | Increments the month signal whenever either `SETUP` signals are active  |
|      INPUT     | `ALARM_EN`      |   Low  |                 1 | Enables the buzzer when the alarm time is reached                       |
|     OUTPUT     | `SECONDS`       |    -   |                 7 | The current seconds the alarm clock has stored                          |
|     OUTPUT     | `MINUTES`       |    -   |                 7 | The current minutes the alarm clock has stored                          |
|     OUTPUT     | `HOURS`         |    -   |                 4 | The current hours the alarm clock has stored                            |
|     OUTPUT     | `DAYS`          |    -   |                 4 | The current day of the week the alarm clock has stored                  |
|     OUTPUT     | `WEEKS`         |    -   |                 2 | The current week of the month the alarm clock has stored                |
|     OUTPUT     | `MONTHS`        |    -   |                 4 | The current month of the year the alarm clock has stored                |
|     OUTPUT     | `YEARS`         |    -   |                 4 | The current year (out of 16) the alarm clock has stored                 |
|     OUTPUT     | `ALARM_MINUTES` |    -   |                 7 | The minute that the alarm clock is set to `BUZZ` at                     |
|     OUTPUT     | `ALARM_HOURS`   |    -   |                 4 | The hour that the alarm clock is set to `BUZZ` at                       |
|     OUTPUT     | `ALARM_DAYS`    |    -   |                 4 | The day of the week that the alarm clock is set to `BUZZ` at            |
|     OUTPUT     | `ALARM_WEEKS`   |    -   |                 2 | The week of the month that the alarm clock is set to `BUZZ` at          |
|     OUTPUT     | `ALARM_MONTHS`  |    -   |                 4 | The month of the year that the alarm clock is set to `BUZZ` at          |
|     OUTPUT     | `BUZZ`          |  High  |                 1 | Signal to buzz an external alarm when the alarm time is reached         |
|     OUTPUT     | `SEG_SECONDS`   |    -   |                14 | Seven segment signal for the seconds the alarm clock has displayed      |
|     OUTPUT     | `SEG_MINUTES`   |    -   |                14 | Seven segment signal for the minutes the alarm clock has displayed      |
|     OUTPUT     | `SEG_HOURS`     |    -   |                14 | Seven segment signal for the hours the alarm clock has displayed        |
|     OUTPUT     | `SEG_DAYS`      |    -   |                14 | Seven segment signal for the date the alarm clock has displayed         |
|     OUTPUT     | `SEG_WEEKS`     |    -   |                14 | Seven segment signal for the week the alarm clock has displayed         |
|     OUTPUT     | `SEG_MONTHS`    |    -   |                14 | Seven segment signal for the month the alarm clock has displayed        |
|     OUTPUT     | `SEG_YEARS`     |    -   |                14 | Seven segment signal for year the alarm clock has displayed             |

## Deliverables
- `FrenchRepublicanCalendarAlarmClock.dig`
- `FrenchRepublicanCalendarAlarmClock.v`
