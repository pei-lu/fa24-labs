# These targets are meant to be run in the build container!

.PHONY: wasm

VERILATOR_ROOT    = /tools/verilator
VERILATOR_EXE     = $(VERILATOR_ROOT)/bin/verilator
EMMAKE            = emmake
EMCXX             = em++

OUTPUT_DIR        = ./scripts/wasm

VERILATOR_CONFIG  = ../verilog/verilator_config

ifeq ($(PART), 1)
	TOPLEVEL = ConventionalAlarmClock
else ifeq ($(PART), 2)
	TOPLEVEL = FrenchRepublicanAlarmClock
else ifeq ($(PART), 3)
	TOPLEVEL = FrenchRepublicanCalendarAlarmClock
endif

wasm: $(OUTPUT_DIR)/$(TOPLEVEL).js

obj_dir: ../verilog/
	$(VERILATOR_EXE) --cc --public ../verilog/$(TOPLEVEL).v $(VERILATOR_CONFIG)
	$(EMMAKE) make -C obj_dir -f V$(TOPLEVEL).mk

$(OUTPUT_DIR)/$(TOPLEVEL).js: obj_dir wasm.cpp
	mkdir -p $(OUTPUT_DIR)
	$(EMCXX) -O3 -Iobj_dir -I$(VERILATOR_ROOT)/include -DPART$(PART) wasm.cpp obj_dir/*.o -o "$(OUTPUT_DIR)/$(TOPLEVEL).js"

simulate: wasm
	python3 -m http.server $(PORT)
