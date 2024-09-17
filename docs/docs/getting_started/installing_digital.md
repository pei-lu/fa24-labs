---
title: Installing Digital
parent: Getting Started
layout: default
nav_order: 1
---

# Installing Digital

## Digital Logic Simulator

For this quarter, all labs are to be done with the [Digital Logic Simulator](https://github.com/hneemann/Digital).
Digital is a *gate-level simulator*, which is a piece of software that allows us to drag and drop individual gates (i.e AND gates, OR gates, etc.) and connect the gates to create *circuits*. These circuits can then be simulated which will generate outputs based on certain inputs.

### Requirements

- &ge; JRE (Java Runtime Environment) 8

### Steps to Install

1. Download the v0.31 release of [Digital](https://github.com/hneemann/Digital/releases/download/v0.31/Digital.zip)
2. Unzip the file

<details markdown="block">
<summary>File Structure</summary>

These are the files that should be unzipped from above.

```
./Digital
├── Digital.exe
├── Digital.jar
├── Digital_noD3D.exe
├── Digital.sh
├── docu/
├── examples/
├── icon.svg
├── install.sh
├── lib/
├── linux/
├── ReleaseNotes.txt
├── Version.txt
└── Windows_Read.me
```

</details>

## Usage

### Launch from GUI

Double click `Digital.jar` to run Digital.

### Launch from terminal

Navigate to wherever you unzipped Digital and run:

```bash
java -jar Digital.jar
```

{: .note}
Windows users might have to run `java.exe` instead of just `java`.
Windows users could also try executing `Digital.exe` in the same directory, or `Digital_noD3D.exe` if you have graphical issues.

### Documentation

In the `./Digital/docu` folder, there is a PDF containing documentation for every component in Digital.

{: .note}
The folder contains several copies of the same documentation, just in different languages.
