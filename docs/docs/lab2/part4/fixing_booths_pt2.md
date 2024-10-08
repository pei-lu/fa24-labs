---
title: Fixing Booth's Multiplier Pt. II
grand_parent: Lab 2
parent: Part 4
layout: default
nav_order: 4
---

# Booth's Multiplier: Part 4
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Edge Case Resolution Pt. II

After getting excited about your solution, you decide to talk to your co-worker so that you can check your solution together to ensure a last-minute problem can be avoided before you share it with your boss at NumeriCorp.
Being impressed by the novelty of your idea, your co-worker decides to test your multiplier on the even multiplier multiplication benchmarks that NumeriCorp has developed over the years.

A few minutes later, your co-worker returns to inform you that your multiplier works correctly when the multiplier value is odd (ends with a '1') even when the multiplicand is the largest representable negative number; however, it surprisingly fails when the multiplier input is an even value (ends with a '0').
The scars of your highschool days seem long-lasting, dooming your efforts to solve this puzzle your professor set for you in no time and dashing your hopes to impress him with the speed of your solution.
While you are dismayed about the state of affairs, you persevere to solve this new challenge by questioning why this odd behavior of working correctly only for odd numbers could happen in your multiplier design.
Your solution shifts the correct bit value to the accumulator after an addition or subtraction operation, but you start to wonder what would happen in the initial steps of the multiplication algorithm if you start to shift a value into the accumulator before any addition/subtraction is performed.
You realize that your solution from [Part 3](https://cse140l.github.io/fa24-labs/docs/lab2/part3) that involves the sign of the multiplicand and the current operation needs to be overridden until the first addition/subtraction result has been loaded into the accumulator (what should the correct value to shift into the accumulator register be instead?).
Once the first real addition/subtraction operation has taken place, your solution from [Part 3](https://cse140l.github.io/fa24-labs/docs/lab2/part3) should provide the correct shift-in value into the accumulator.
You realize that the proposed solution requires you to remember whether you have encountered an actual add/subtract operation whose result is loaded into the accumulator, which can be achieved through a flip-flop.

Armed with the result of your analysis, you should modify your circuit from [Part 3](https://cse140l.github.io/fa24-labs/docs/lab2/part3) to include the logic implementation satisfying the requirements identified in the last paragraph for determining the correct Accumulator MSB at all stages of Booth's multiplication.
Your overall logic to determine the correct shift-in value into the accumulator should comfortably fit within the constraints of 4 gates and a flip-flop.
Try your solution on numerous input conditions, including of course even multipliers, and various combinations of the largest representable positive and negative two's complement numbers.
