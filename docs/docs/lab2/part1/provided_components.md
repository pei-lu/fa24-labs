---
title: Provided Components
parent: Part 1
grand_parent: Lab 2
layout: default
nav_order: 5
---

# Components Provided
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

{: .important}
These files are **provided** to you, please visit this [section](https://cse140l.github.io/fa24-labs/docs/getting_started/using_digital#library) to get started with this process.
It is important to setup these provided files as a library, that way if we provide any updates, you don't have to do any more work other than just [updating the lab repository](https://cse140l.github.io/fa24-labs/docs/getting_started/lab_repo#updating-the-repository).

{: .note}
Please pay attention to capitalization of pin names as they could be referencing different components.
If you have any doubts, please ask a question on Piazza.

## `ControlUnit`

### Ports 

The ports of the module are provided below with a description:

| Port Direction | Port Name       | Active | Port Width (bits) | Description                                                             |
|:--------------:|-----------------|:------:|------------------:|-------------------------------------------------------------------------|
|      INPUT     | `CLK`           | Rising |                 1 | Clock input used to produce outputs for controlling the multiplier      |
|      INPUT     | `RST`           |  High  |                 1 | Resets the control unit                                                 |
|     OUTPUT     | `END`           |  High  |                 1 | Indicates that the multiplication is completed                          |
|     OUTPUT     | `INIT`          |  High  |                 1 | The signal to initialize the multiplication process                     |
|     OUTPUT     | `EX_OP`         |  High  |                 1 | Denotes whether or not to perform an operation (Add/Subract)            |
|     OUTPUT     | `SHIFT`         |  High  |                 1 | Denotes whether or not to shift the partial sum                         |

### Explanation

The control unit (also called a controller) coordinates the multi-cycle process, dictating to each device what to do on every cycle until the entire process is concluded.
Every other device simply does what it is commanded to do on each cycle, and has no concept of how far into the multiplication algorithm it has progressed, how to coordinate itself with other devices, or when they are finished.
The controller has output signals that can be used to coordinate the actions of the other devices.
These outputs must be connected to the correct inputs of the devices in order for control to be effective.
For example, when the algorithm begins, each sequential device must initialize itself: the multiplier and multiplicand by loading input values, the accumulator by clearing to zero, and the flip-flops by resetting to zero.
The control unit provides a single line (`INIT`) that can be used for this purpose, which goes high ('1') on the first cycle of the algorithm.

The controller’s other important outputs are `EX_OP` and `SHIFT`.
As you must have heard, the basic multiplication operation implementation is colloquially referred to as an Add/Shift algorithm.
As the name denotes, the `SHIFT` signal controls the latter step of the algorithm.
The former step of "Add" (or perhaps more accurately called "Add/Subtract") is controlled by the `EX_OP` signal, even though the name of the signal is to be interpreted a bit more broadly.
For starters, as we know, the actual operation to be executed in Booth’s multiplication alternates between subtraction and addition (hopefully with long bouts of doing nothing in between).
In this particular implementation, for simplicity, we will forgo luxuriating in laziness and instead have the algorithm execute an operation every cycle.
To ensure correct execution of the overall algorithm, we will end up throwing away (i.e. not load) the result of the addition/subtraction in many of the cases.
All `EX_OP` denotes is that we are indeed on an operation (i.e. an "Add/Subtract") cycle; It is up to you, as discussed at the end of the description of Booth’s algorithm, to determine the gate whose output, in conjunction with the `EX_OP` signal indicating that we are on an "Add/Subtract" cycle, will determine whether the result of the addition/subtraction is loaded into the accumulator register.

Booth’s multiplication algorithm consists of the following steps in the given order:

1. Load multiplier and multiplicand, clear accumulator A and flip-flops F1 and F2;
2. Repeat 13 times the following two sub-steps:
    1. Update the accumulator:
        - If the LSB of the multiplier register is 0 and F1 = 1, A = A + Multiplicand
        - If the LSB of the multiplier register is 1 and F1 = 0, A = A – Multiplicand
        - Else, don't update A
    2. Shift A and multiplier 1-bit rightward.
    The LSB of the accumulator should flow into the MSB of the multiplier, and the LSB of the multiplier should flow into F1.
    The MSB of the Accumulator will be updated at this stage, but its behavior will differ between Steps 1-4.
3. The 26-bit result will appear as the concatenation of A\[12:0\] and Multiplier\[12:0\]

|         Cycle         | `INIT` | `EX_OP` | `SHIFT` | `END` |
|:---------------------:|-------:|--------:|--------:|------:|
|           0           |      1 |       0 |       0 |     0 |
|  [1, 25] (odd cycles) |      0 |       1 |       0 |     0 |
| [2, 26] (even cycles) |      0 |       0 |       1 |     0 |
|           27          |      0 |       0 |       0 |     1 |

## `Shifter`

### Ports

The ports of the module are provided below with a description:

| Port Direction | Port Name       | Active | Port Width (bits) | Description                                                             |
|:--------------:|-----------------|:------:|------------------:|-------------------------------------------------------------------------|
|      INPUT     | `CLK`           |  High  |                 1 | Input for which each rising edge either shifts, clears, or loads        |
|      INPUT     | `CLR`           |  High  |                 1 | Resets the shifter                                                      |
|      INPUT     | `LOAD`          |  High  |                 1 | Sets the output to `DATA_IN` when high                                  |
|      INPUT     | `SHIFT`         |  High  |                 1 | Shifts in `SHIFT_IN` to the right (and discarding LSB)                  |
|      INPUT     | `DATA_IN`       |    -   |                13 | Data to be loaded in when `LOAD` is high                                |
|      INPUT     | `SHIFT_IN`      |    -   |                 1 | Bit to be shifted in which `SHIFT_IN` is high                           |
|     OUTPUT     | `DATA_OUT`      |    -   |                13 | Data stored in the shift register                                       |


### Explanation

May be used for both the accumulator register and the multiplier register.
