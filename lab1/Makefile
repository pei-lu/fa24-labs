.PHONY: clean build simulate all

PART ?= 1
PODMAN_RUN = podman run -it --rm -v ./:/src -e PART=$(PART)

CONTAINER ?= docker.io/anishg24/cse140l:latest
PORT      ?= 8000


all: build

pull:
	podman pull $(CONTAINER)

build:
	$(PODMAN_RUN) $(CONTAINER) make -C simulator wasm

simulate:
	$(PODMAN_RUN) -p $(PORT):$(PORT) $(CONTAINER) make -C simulator simulate

