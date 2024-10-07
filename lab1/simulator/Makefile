# These targets are meant to be run in the build container!

.PHONY: wasm simulate

VERILATOR_ROOT    = /tools/verilator
VERILATOR_EXE     = $(VERILATOR_ROOT)/bin/verilator
EMMAKE            = emmake
EMCXX             = em++

OUTPUT_DIR        = ./scripts/wasm

VERILATOR_CONFIG  = ../verilog/verilator_config

PART ?= $(error SELECT PART TO COMPILE)
PORT ?= 8000

TOPLEVEL = $(shell sed -n '$(PART)p' < ../top_level.txt)

wasm: $(OUTPUT_DIR)/$(TOPLEVEL).js

$(TOPLEVEL)_dir: ../verilog/
	$(VERILATOR_EXE) --Mdir $(TOPLEVEL)_dir --cc --public ../verilog/$(TOPLEVEL).v $(VERILATOR_CONFIG)
	$(EMMAKE) make -C obj_dir -f V$(TOPLEVEL).mk

$(OUTPUT_DIR)/$(TOPLEVEL).js: $(TOPLEVEL)_dir wasm.cpp
	mkdir -p $(OUTPUT_DIR)
	$(EMCXX) -O3 -I$(TOPLEVEL)_dir -I$(VERILATOR_ROOT)/include -DPART$(PART) wasm.cpp $(TOPLEVEL)_dir/*.o -o $(OUTPUT_DIR)/$(TOPLEVEL).js

simulate: wasm
	python3 -m http.server $(PORT)
