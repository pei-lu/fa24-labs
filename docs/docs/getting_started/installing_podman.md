---
title: Installing Podman
parent: Getting Started
layout: default
nav_order: 2
---

# Installing Podman

{: .note}
Podman isn't necessary to complete the labs, but we strongly recommend to install Podman to run the test cases that we provide.

## Podman

Podman is a container engine (similar to Docker) but with several architectural differences. 
For this course, we will use Podman as a quick way to install complex dependencies on all systems that can run a container.
This means, instead of us asking you to figure out how to build libraries with specific changes and figure out your compiler toolchain, we simply ask you to install Podman and run a container we created which can handle all that complex setup for you, so you can focus on making circuits.

Please refer to this page on how to [install Podman](https://podman.io/docs/installation). 
The process is different for each host operating system, so please be attentive to the guide, and if there are any issues please Google them first before asking the staff for help.

<details markdown="block">
<summary>Interested in learning more?</summary>

> I am neither especially clever nor especially gifted. I am only very, very curious.  
> *Albert Einstein*

This is outside the scope of the class, but learning how to use container engines is a valuable skill as a computer engineer or scientist.
Here are some links to get you started:

- [OS-level Virtualization](https://en.wikipedia.org/wiki/OS-level_virtualization)
- [Virtualization](https://www.ibm.com/topics/virtualization)
- [Containers vs VMs](https://www.atlassian.com/microservices/cloud-computing/containers-vs-vms)
- [Docker](https://www.ibm.com/topics/docker)
- [Podman vs Docker](https://betterstack.com/community/guides/scaling-docker/podman-vs-docker/)

If you are interested in learning more in depth, CSE 120 and and CSE 221 are great courses to delve deeper into operating systems.

If you are familiar with Docker and containers, you can see what we have added to our [base image](https://github.com/CSE140L/docker).

</details>

## Usage

{: .important-title}
> Windows Users
> 
> Windows users are highly recommended to use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to ensure full compatibility with the Makefiles.

This may change on a per-lab basis, but typically to run the test suite for a circuit, you should run:

```
make test
```

To run the browser-based simulation for a circuit, you should run:

```
make simulate
```

If there is a new update to the container (we will announce it if there is), please run the following as soon as possible:

```
make pull
```

