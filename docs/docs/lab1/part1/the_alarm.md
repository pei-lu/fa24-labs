---
title: The Alarm
parent: Part 1
layout: default
nav_order: 2
---

# The Alarm System
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

With a working clock, you decide to make it an **alarm** clock.
You think deeply about what are the major components of making an alarm work, and decided that there are two; setting the alarm and sounding the alarm.

With the ideas still fresh in your mind, you create the flowchart in [Figure 1](#figure-1) that combines the setting logic of your clock alongside with the logic for setting the alarm functionality.
You then also think about how to create a mechanism for the alarm to sound on the set time, and with that in mind you create another flowchart for you to use in [Figure 2](#figure-2).

However, you are still stumped on how to store the alarm time, but you figure that you can just create another `BabylonianClock` component to store the information that you want.


## Goals

1. Learn how to use *Digital*
2. Add the following functionality to your clock:
    - Setting the alarm time
    - Sounding the alarm when the time has been reached

## Figures

### Figure 1
Setting the Alarm Clock
{: .text-delta}
```mermaid
flowchart LR
    A{SETUP_TIME == 1?}
    A1{SETUP_ALARM == 1?}
    A2{SETUP_ALARM == 1?}
    B{MIN_ADV ⎽⎽/⎺⎺ ?}
    B1{MIN_ADV ⎽⎽/⎺⎺ ?}
    C["minutes = minutes + 1
       display(minutes)"]
    C1["alarm_minutes = alarm_minutes + 1
       display(alarm_minutes)"]
    D{HR_ADV ⎽⎽/⎺⎺ ?}
    D1{HR_ADV ⎽⎽/⎺⎺ ?}
    E["hours = hours + 1
       display(hours)"]
    E1["alarm_minutes = alarm_minutes + 1
       display(alarm_minutes)"]

    A -->|No| A1
    A -->|Yes| A2

    subgraph alarm [setting alarm]
    A1 -->|Yes| B1 & D1
    A1 -->|No| G["Do Nothing"]
    B1 --> C1
    D1 --> E1
    end 

    subgraph time [setting time]
    A2 -->|Yes| B & D
    A2 -->|No| F["Not possible"]
    B -->|Yes| C
    D -->|Yes| E
    end

    time & alarm -->|After Operation| A
```

### Figure 2 
Setting the Alarm Clock
{: .text-delta}
```mermaid
flowchart TD
    A[Wait 1s]
    A1[BUZZ = 0]
    B{minutes == alarm_minutes?}
    C{hours == alarm_hours?}
    D{ALARM_EN == 0?}
    E[BUZZ = 1]


    A --> B
    B -->|Yes| C
    B -->|No| A1
    C --> |Yes| D
    C --> |No| A1
    D -->|Yes| E
    D -->|No| A1
    E --> A

    A1 --> A
```
