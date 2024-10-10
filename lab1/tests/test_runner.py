from cocotb.runner import get_runner
from pytest_utils.decorators import max_score, visibility, partial_credit

from test_part1 import *
from test_part2 import *
from test_part3 import *

SIM = "verilator"

def generate_runner(top_level: str):
    source = f"../verilog/{top_level}.v"
    runner = get_runner(SIM)
    runner.build(sources=[source, "../verilog/verilator_config.v"], hdl_toplevel=top_level)
    return runner




@max_score(3)
@visibility("hidden")
@partial_credit()
def test_part3(set_score=None):
    top_level = "ConventionalAlarmClock"
    runner = generate_runner(top_level)

    current_score = 0
    test_cases = {
        check_setup: 1,
        check_clr: 1,
        pass_one_minute: 1
        
    }
    for element, score in test_cases.items():
        try:
            runner.test(hdl_toplevel=top_level, test_module=test_part3.__name__, testcase=element.__name__)
            current_score += score
        except:
            print("FAILED")
        set_score(current_score)




@max_score(3)
@visibility("hidden")
@partial_credit()
def test_part3(set_score=None):
    top_level = "FrenchRepublicanAlarmClock"
    runner = generate_runner(top_level)

    current_score = 0
    test_cases = {
        check_setup: 1,
        check_clr: 1,
        pass_one_minute: 1
        
    }
    for element, score in test_cases.items():
        try:
            runner.test(hdl_toplevel=top_level, test_module=test_part3.__name__, testcase=element.__name__)
            current_score += score
        except:
            print("FAILED")
        set_score(current_score)




@max_score(3)
@visibility("hidden")
@partial_credit()
def test_part3(set_score=None):
    top_level = "FrenchRepublicanCalendarAlarmClock"
    runner = generate_runner(top_level)

    current_score = 0
    test_cases = {
        check_setup: 1,
        check_clr: 1,
        pass_one_minute: 1
        
    }
    for element, score in test_cases.items():
        try:
            runner.test(hdl_toplevel=top_level, test_module=test_part3.__name__, testcase=element.__name__)
            current_score += score
        except:
            print("FAILED")
        set_score(current_score)
