---
title: Lab Repository
parent: Getting Started
layout: default
nav_order: 5
---

# CSE 140L Repository

## Repository Structure

The lab repository is structured as a *mono-repository*.
This means that all the files, tests, simulation code, and documentation are all in one big monolithic repository.
For this quarter, the repository is available at [https://github.com/CSE140L/fa24-labs](https://github.com/CSE140L/fa24-labs).

## Cloning the Repository

To clone the repository, please ensure that `git` is installed on your system.
**Windows users, please use WSL for running anything in the repository.**

Then run the following in bash:
```bash
git clone https://github.com/CSE140L/fa24-labs ./CSE140L
cd CSE140L
```

## Navigating the Repository

The repository structure is as follows:

```
CSE140L/
├── labX
│   ├── Makefile
│   ├── schematics
│   ├── simulator
│   ├── tests
│   └── verilog
├── libdig
├── Makefile
└── README.md
```

Within each `labX` directory, you are given a `schematics/` directory for you to use as a workspace for that lab.
All *Digital* files should be created and saved in that directory.
This is to ensure that 

{: .important}
Any *Digital* files that we provide (like for [lab 1](https://cse140l.github.io/fa24-labs/docs/lab1/part1/provided_components.md)) will be saved in the `libdig` directory.
Please consult [this page](https://cse140l.github.io/fa24-labs/docs/getting_started/using_digital#library) on how to load in the library to *Digital*.

## Updating the Repository

We might issue updates to the repository during labs, either to fix issues that students have raised or to introduce new features.
We will make announcements whenever there are updates on Piazza.

When in the repository, you should be able to run:

```
git pull origin master
```
