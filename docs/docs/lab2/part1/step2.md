---
title: Step 2
grand_parent: Lab 2
parent: Part 1
layout: default
nav_order: 3
---

# Booth's Multiplier: Step 2
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Adder Optimization

While you quickly finish up the task of the implementation in [Step 1](https://cse140l.github.io/fa24-labs/docs/lab2/part1/step1), something seems to be bothering you, as you remember from your lectures in CSE 140 that the issue of overflow during addition was a much more nuanced undertaking.
You decide to explore this overflow issue a bit more in depth while considering the particularities of the consecutive operations which occur during a Booth's multiplication.
Your efforts quickly bear fruit, and you are able to effect an extra optimization on your Booth's multiplier from [Step 1](https://cse140l.github.io/fa24-labs/docs/lab2/part1/step1), thus reducing the bit width of the adder.

Please implement the appropriate optimization on your circuit to reduce the width while correctly filling in the MSB of the accumulator upon the shift. 
In reducing the width of the adder, you need to address the issue of how the MSB of the accumulator is to be filled in as you shift it right.
You are torn between saving the final carry-out of the addition/subtraction operation and loading it to the MSB vs simply doing a sign extension.

To do the changes you decide, you will need to modify the component we have provided in the component library, but you will probably find the modifications to be rather straightforward.
You will need to determine the new bit position that needs to be connected to the flip-flop F2 input so that the correct bit value can be shifted into the accumulator.

If you need to know how the components are implemented to carry out your modifications, the needed information can be found by opening the provided component in *Digital* and examining the circuit.

<details markdown="block">
<summary>Hint</summary>

Consider the order of additions and subtractions in Booth's algorithm.
Is there a pattern in the sequence of additions/subtractions that Booth's algorithm performs that can lead to any guarantees regarding overflow occurrence?

</details>
