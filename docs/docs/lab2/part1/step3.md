---
title: Step 3
grand_parent: Lab 2
parent: Part 1
layout: katex
nav_order: 3
---

# Booth's Multiplier: Step 3
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Edge Case Resolution Pt. I

Now that you are going full speed and establishing a reputation for yourself as the young genius of the company, you realize it is time for you to deliver the final coup de grace to all the old-timers, impress them with your capabilities, and quickly rise to the position of CEO and establish NumeriCorp as the unquestioned master of the world, if not the universe, with you at the helm of course.
You decide that you need to deal with this pesky limitation of NumeriCorp's peculiar two's complement representation,
which forced all the salesmen of your company to quickly run for the exits when a competitor started saying something about large negative numbers.
Namely, it is time to make NumeriCorp a full-service company capable of representing and manipulating all (non-zero) two's complement numbers, including $-2^{(n-1)}$.

While this lean and mean multiplier you constructed in [Step 2](https://cse140l.github.io/fa24-labs/docs/lab2/part1/step2) seems in general to be correctly functioning, you quickly realize that it runs into trouble with the largest representable negative numbers.
A quick glance at multiplying the largest representable negative number in the multiplicand by the simple value of 1 in the multiplier shows the extent of your troubles.
But as you have clearly identified the causes of the problem, you persevere in your quest to fix things up.
With two's complement multiplication, you soon realize those overflowing partial sums can be restored to health if you have extra headroom to accommodate the result (and, of course, assuming you can figure out what the correct sign bit should be).
You soon realize that the extra headroom to accommodate the restoration of the result will magically appear as a result of the right shift.
With this sliver of hope, you decide to examine more carefully what the sign bit should be when you right shift and to determine a logic implementation to feed your sign bit.
You quickly realize that your straightforward techniques of [Step 2](https://cse140l.github.io/fa24-labs/docs/lab2/part1/step2) will fall short of the mark.

After a brief moment of consideration, you remember that you either add or subtract the multiplicand at each step, and the sign of the new partial sum value after each step merely depends on the sign bit of the multiplicand and the performed operation at the current step.
For instance, the accumulator value takes the opposite sign of the multiplicand after the first subtraction operation, and its sign becomes identical to the multiplicand upon the next addition operation.
Now the accumulator sign determination is under control; you can derive a simple logic by using the sign bit of the multiplicand and the A/S signal that controls the current operation.
Your implementation should not require more than a single 2-input logic gate.
Similar to the previous parts, you should store the generated sign value in the flip-flop F2 whenever a result is stored in the accumulator and keep shifting the same sign value until the next real addition/subtraction step.
Being rather fond of odd numbers, as your great interest in highschool in math and science seems to have singled you as the odd man out, you try your design with a whole bunch of odd multipliers to confirm its correctness.
