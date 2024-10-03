---
title: Using Digital
parent: Digital
layout: default
nav_order: 2
---

# Using Digital
{: .no_toc}

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Introduction to Digital

*Digital* has a fantastic documentation (see [Documentation](https://cse140l.github.io/fa24-labs/docs/getting_started/installing_digital#documentation)) that encompasses all the features that the simulator provides.
In particular, we urge you to complete chapter 1 of the documentation to get a good feel for the tool. 
This chapter is a fantastic introduction to the tool, covering how to place gates, draw wires, inputs and outputs, and hierarchies.
All of these topics are expected to be known for all the lab assignments in this quarter.

## Essential Information

**The rest of this page covers essential information for designing circuits in this course.**
**Failure to adhere to the information when designing your lab might result in your lab being delayed in grading or incorrectly graded.**

Please check this page frequently if there are any additional updates that we require (we will also announce these).

### Library

For some labs, we provide some components as a starter.
To use these components, please [clone the lab repository](https://cse140l.github.io/fa24-labs/docs/getting_started/lab_repo#cloning-the-repository).
Then, in *Digital* navigate to the library settings and find the path to the [`libdig`](https://cse140l.github.io/fa24-labs/docs/getting_started/lab_repo#navigating-the-repository) folder in the lab repository (`Edit > Settings > Advanced`).
Restart *Digital*

You should now be able to use the library components at `Components > Library`.

### Labels

Labels are a way to name any component (i.e gates, flip-flops, latches, wires, modules, etc.).
Labels are available in the properties of a component (viewable by right-clicking on a component).
Naming your components are very important for the grading staff to properly grade your circuits.
You do not have to label everything if you do not wish to, however in the lab writeups **we will explicitly mention what we expect to be labelled and how to label them** so that we can test your circuit with our infrastructure.
Additionally, any tests that we provide also depend on the correct labeling setup, so please make sure to always check your labels are correct!

### Export to Verilog

We ask students to export their schematics to Verilog.
This is so that a student's schematics can interface with our testing platform.
Aside from lab reports, the next thing we thoroughly check are the Verilog netlists more than the schematics themselves, so it is important to ensure that you are familiar with exporting to Verilog.
Please get familiar with exporting to verilog by reading section 4.3 in the *Digital* documentation.
**Please do not upload any exported testbenches to GradeScope**.

### Digital Testbenches

Testbenches in *Digital* are analogous to unit tests in any software codebase.
We do not provide you with any *Digital* testbenches, but we provide you with a testbench that runs similar to how it runs on the autograder.
We recommend writing your own testbenches to verify your logic, and can learn how to do so in section 1.4 and 14.1 in the documentation.
