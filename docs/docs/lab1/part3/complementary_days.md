---
title: Complementary Days
parent: Part 3
grand_parent: Lab 1
layout: default
nav_order: 2
---

# Complementary Days in The French Republican Calendar Alarm Clock
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

{: .highlight}
This is an optional bonus part of the lab, and should be attempted after finishing the non-optional part of the French Republican Calendar.

After finishing the base French Republican Calendar Alarm Clock (and more importantly, restocking the Advil), you decide to take a stab at handling complementary days.
To remind yourself what complementary days are, you check your notes and read that at the **end of every year, there are 5 extra days (6 extra days in leap years)**.
You find that **years that are `year mod 4 = 3` are leap years**.
You decide that since you have the space, you can define a 13th "month" that holds these complementary days.

This would mean that your alarm clock would behave similarly to the base clock for the first 12 months.
But **on the 13th month, the day counter rolls over at 5 (displays 0-4) on a regular year and will roll over at 6 (displays 0-5) on a leap year.**
Additionally, since there are only 5 or 6 days in this "month", **when the days reset the months need to reset as well (and increment the year).**

## Goals

1. Learn how to use *Digital*
2. Create a fully functional French Republican Calendar 

## Instructions

All of your work should be a continuation of `FrenchRepublicanCalendarAlarmClock` (it will save as `FrenchRepublicanCalendarAlarmClock.dig`).

Please use the logic outlined above to implement your updated calendar.

Remember, your final circuit should implement:
- The correct time functionality (outlined in **bold** in the lore above)
- The `CLR` pin clears everything
- The time setting logic
- The alarm setting logic
- The alarm buzzing logic
- The display functionality
