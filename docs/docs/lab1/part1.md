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

## Introduction

### Behavioral Description

In your quest to master digital clockmaking, you discover that an alarm clock has two essential functions: displaying the current time and sounding an alarm at a set time.
Rather than being bound to clocks with a fixed alarm time—where each change would require purchasing a new device—your goal is to design a system that allows users to set and adjust the alarm time themselves.
This flexibility ensures that users can easily customize their alarms without needing a new clock for each adjustment.

Moreover, given that electronic devices can lose their settings during a power outage, it's crucial to enable users to set the current time manually.
This feature will ensure that timekeeping remains accurate even if power is disrupted.

In your journey to becoming a master of digital clockmaking, you'll start with the most fundamental aspect: tracking the current time.
This basic function is quite straightforward.
Initially, you will focus on keeping track of hours, minutes, and seconds, setting aside more complex temporal concepts for later exploration.

The relationship between these three units of time is elegantly encapsulated in the conventional Babylonian system of 24 hours, 60 minutes, and 60 seconds, as shown in Figure 1.
To simplify your task, your mentor has provided a `ClockDev` component that already handles these fundamental timekeeping functions, allowing you to focus on more advanced features in the upcoming parts of your project.


## Goals

1. Learn how to use Digital
2. Create a clock capable of:
    - Displaying the current time
    - Setting the current time
    - Setting the alarm time
    - Sounding an alarm at a user-defined time

## Figures

### Figure 1
{: .text-delta}
```mermaid

```
