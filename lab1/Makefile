.PHONY: clean build simulate all _verilog

PART ?= 1
PODMAN_RUN = podman run -it --rm -v ./:/src -e PART=$(PART)

CONTAINER ?= docker.io/anishg24/cse140l:latest
PORT      ?= 8000

TOPLEVEL_LIST ?= top_level.txt

all: build

pull:
	podman pull $(CONTAINER)

verilog:
	$(PODMAN_RUN) $(CONTAINER) make _verilog

build: verilog
	$(PODMAN_RUN) $(CONTAINER) make -C simulator wasm

simulate:
	$(PODMAN_RUN) -p $(PORT):$(PORT) $(CONTAINER) make -C simulator simulate

_verilog:
	mkdir -p verilog/
	for top in $$(cat $(TOPLEVEL_LIST)) ; do \
        digital verilog -dig schematics/$$top.dig -verilog verilog/$$top.v; \
	done

clean:
	$(RM) -rf verilog/ simulator/scripts/wasm
