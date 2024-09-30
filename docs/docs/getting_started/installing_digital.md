---
title: Installing Digital
parent: Digital
layout: default
nav_order: 1
---

# Installing Digital
{: .no_toc}

{: .important-title}
> Windows Users
> 
> Windows users are recommended to install Digital on Windows itself, not using WSL.
> When exporting your schematics to verilog however, it's important to save your verilog to a path shareable with WSL.

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Requirements

- [&ge; JRE (Java Runtime Environment) 8](https://openjdk.org/install/)

## Steps to Install

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

# Running Digital

## Launch from GUI

Double click `Digital.jar` to run Digital.

## Launch from terminal

Navigate to wherever you unzipped Digital and run:

```bash
java -jar Digital.jar
```


{: .important-title}
> Windows Users
> 
> Windows users might have to run `java.exe` instead of just `java`.
> Windows users could also try executing `Digital.exe` in the same directory, or `Digital_noD3D.exe` if you have graphical issues.

# Documentation

In the `./Digital/docu` folder, there is a PDF containing documentation for every component in Digital.

{: .note}
The folder contains several copies of the same documentation, just in different languages.
