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

After presenting your latest clock (the *French Republican Alarm Clock*) internally to your eccentric boss, he had one concern:

> What about the bear market?

Worried that your compensation is worthless now, you quickly ask him what happened to the stock prices.
He looked confused and said 

> No, I meant about marketing this alarm clock to bears!

Confused (and regretting not pursuing academia) you decide to ask more about what your boss is thinking about.
Apparently, your boss is worried about bears sleeping in during hibernation, and suggests that you implement more features to your alarm clock to **account for the day of the week, week of the month, and month of the year when determining when to ring the alarm**.
Shocked at his request, you propose that the team maintaining the *Conventional Alarm Clock* could take up this responsibility for their *Conventional Alarm Clock 2* set to release soon.
Your boss turns this idea down, claiming that no reasonable bear would ever consider using calendars in multiples of 60 for the sole reason that bears can't do math.
He instead suggests you add it to your "simpler" alarm clock.
After leaving the meeting room (with a massive headache), you decide to calm your mind and research how to implement this silly task.

Upon closer inspection, it seems that these French revolutionaires gave up on their simpler system, and their higher order units of time became a bit more irregular.
The French Republican Calendar has **10 days in a week, 3 weeks in a month, and 12 months in a year**.
This however results in a 5-6 days fewer in a year than the convetional calendar we use today.
You decide that you don't have enough Advil to worry about this at the current moment.
After a normal dosage of Advil, you sit down and get to work.

## Goals

1. Learn how to use *Digital*
2. Create a French Republican Calendar 

## Instructions

{: .highlight}
**YOU DO NOT IMPLEMENT THE 5-6 FEWER DAY DISCREPANCY IN THIS PART.**

All of your work should be in a new circuit called `FrenchRepublicanCalendarAlarmClock` (it will save as `FrenchRepublicanCalendarAlarmClock.dig`).

You have been given some [more signals](/docs/lab1/part3#circuit-structure) than the previous parts, namely:
- `DAY_ADV`
- `WEEK_ADV`
- `MONTH_ADV`
- `DAYS`
- `WEEKS`
- `MONTHS`
- `ALARM_DAYS`
- `ALARM_WEEKS`
- `ALARM_MONTHS`
- `SEG_DAYS`
- `SEG_WEEKS`
- `SEG_MONTHS`

Please check the previous parts to see how the signals were used (the naming convention should give you a hint) and implement the missing logic required.

Remember, your final circuit should implement:
- The correct time functionality (outlined in **bold** in the lore above)
- The `CLR` pin clears everything
- The time setting logic
- The alarm setting logic
- The alarm buzzing logic
- The display functionality
