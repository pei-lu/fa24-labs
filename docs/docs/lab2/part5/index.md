---
title: Part 5
parent: Lab 2
layout: default
nav_order: 7
---

# Logical Equivalence Checking
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Goals

1. Verify the functionality for two simple boolean circuits.

## Circuit Structure

{: .warning}
Failure to follow this structure can result in grading of the lab to be delayed or incorrect.

Your main *Digital* circuit should be named as `LogicalEquivalenceChecking`.
The following ports should be opened for the `LogicalEquivalenceChecking`:

| Port Direction | Port Name       | Active | Port Width (bits) |
|:--------------:|-----------------|:------:|------------------:|
|      INPUT     | `A`             |    -   |                 1 |
|      INPUT     | `B`             |    -   |                 1 |
|      INPUT     | `C`             |    -   |                 1 |
|      INPUT     | `D`             |    -   |                 1 |
|     OUTPUT     | `Y_0`           |    -   |                 1 |
|     OUTPUT     | `Y_1`           |    -   |                 1 |
|     OUTPUT     | `Z_0`           |    -   |                 1 |
|     OUTPUT     | `Z_1`           |    -   |                 1 |
|     OUTPUT     | `F_0`           |    -   |                 1 |
|     OUTPUT     | `F_1`           |    -   |                 1 |
