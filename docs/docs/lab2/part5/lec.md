---
title: Logical Equivalence Checking
grand_parent: Lab 2
parent: Part 5
layout: katex
nav_order: 4
---

# Logical Equivalence Checking
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Edge Case Resolution Pt. II

In this part, you are asked to check the equivalence between Boolean functions and practice a little bit of Boolean transformations with the help of *Digital*.
We first provide you two pairs of logic functions.
You need to decide whether these function pairs are equivalent or not.
Tell us in your report what input combinations produce different outputs for cases when the functions are not equivalent.
Verify your conclusion by implementing each pair of the functions in *Digital* and comparing their outputs under the same input
combinations.
A good way to perform the comparison is to connect the outputs of the two functions as inputs to an XOR gate, which will output a "1" whenever its inputs are distinct.
Subsequently, you need to test for all possible input combinations and see if the value of the XOR gate is ever 1.
The inputs causing a '1' at the XOR output are the ones for which the two functions differ.
Your task is to identify all such inputs.
The two pairs of logic functions are:

$$
\begin{align*}
Y_0 &= (A+B) \cdot (\overline{C}+D) \cdot (A+\overline{C}) \\\
Y_1 &= A\cdot\overline{C}+A\cdot D +\overline{C}\cdot D + \overline{A}B\overline{D}
\end{align*}
$$

and

$$
\begin{align*}
Z_0 &= \overline{B}\cdot (A+C)\cdot (\overline{A} + \overline{C}) \\\
Z_1 &= A\cdot\overline{B}\cdot\overline{C}+\overline{A}\cdot\overline{B}\cdot C
\end{align*}
$$

A slightly more challenging yet interesting task for you to accomplish next is the Boolean transformation of a small equation.
You are given a pair of Boolean expressions below.
However, the expression on the right-hand side is incomplete as the polarities of its literals are not specified (labeled with a “?” in the equation).
You are asked to identify the polarity combination of these literals that makes the two expressions equivalent.

$$
\begin{align*}
F_0 &= A \oplus B \odot C \\
F_1 &= (A^?\cdot B + A^?\cdot\overline{B})\cdot C + (A^?\cdot B + A^?\cdot\overline{B})\cdot\overline{C}
\end{align*}
$$

You can identify the correct combination of polarities by simulating each option and comparing it to the left-hand side through the XOR technique we just outlined.
Alternatively, you can use Boolean transformations and/or your knowledge of Boolean operations to zero in on the possible correct result.
In any case, please provide us the implementation of the two boolean expressions and verify the correctness of your result by running it through the XOR check.

{: .highlight-title}
> Lab Report
> 
> What input combinations produce different outputs for cases when the functions ($Y_0$ vs $Y_1$ and $Z_0$ vs $Z_1$) are not equivalent?
> 
> What is the full unobfuscated equation of $Z_1$ that you have found?
