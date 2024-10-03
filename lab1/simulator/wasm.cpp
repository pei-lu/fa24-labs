#include <emscripten.h>

#if defined(PART1)

#include "VConventionalAlarmClock.h"
auto* controller = new VConventionalAlarmClock;

#elif defined(PART2)

#elif defined(PART3)

#endif

#define FIRST_SEGMENT_MASK 0x7f
#define SECOND_SEGMENT_MASK 0x3f80

extern "C" {
  void EMSCRIPTEN_KEEPALIVE clk() {
    controller->CLK = 0;
    controller->eval();
    controller->CLK = 1;
    controller->eval();
  }

  void EMSCRIPTEN_KEEPALIVE reset() {
    controller->CLR = 1;
    clk();
    controller->CLR = 0;
    clk();
  }

  int EMSCRIPTEN_KEEPALIVE get_seven_segment_output(int digit) {
    switch (digit) {
        case 0:
          return controller->SEG_SECONDS & FIRST_SEGMENT_MASK;
        case 1:
          return (controller->SEG_SECONDS & SECOND_SEGMENT_MASK) >> 7;
        case 2:
          return controller->SEG_MINUTES & FIRST_SEGMENT_MASK;
        case 3:
          return (controller->SEG_MINUTES & SECOND_SEGMENT_MASK) >> 7;
        case 4:
          return controller->SEG_HOURS & FIRST_SEGMENT_MASK;
        case 5:
          return (controller->SEG_HOURS & SECOND_SEGMENT_MASK) >> 7;
        default:
          return controller->SEG_SECONDS;
    }
  }

  void EMSCRIPTEN_KEEPALIVE enable_setup_time() {
    controller->SETUP_TIME = 1;
    controller->eval();
  }

  void EMSCRIPTEN_KEEPALIVE disable_setup_time() {
    controller->SETUP_TIME = 0;
    controller->eval();
  }


  void EMSCRIPTEN_KEEPALIVE enable_setup_alarm() {
    controller->SETUP_ALARM = 1;
    controller->eval();
  }

  void EMSCRIPTEN_KEEPALIVE disable_setup_alarm() {
    controller->SETUP_ALARM = 0;
    controller->eval();
  }

  void EMSCRIPTEN_KEEPALIVE advance_minute() {
    controller->MIN_ADV = 1;
    controller->eval();
    controller->MIN_ADV = 0;
    controller->eval();
  }

  void EMSCRIPTEN_KEEPALIVE advance_hour() {
    controller->HR_ADV = 1;
    controller->eval();
    controller->HR_ADV = 0;
    controller->eval();
  }

  int EMSCRIPTEN_KEEPALIVE get_seconds() {
    return controller->SECONDS;
  }

  int EMSCRIPTEN_KEEPALIVE get_minutes() {
    return controller->MINUTES;
  }

  int EMSCRIPTEN_KEEPALIVE get_hours() {
    return controller->HOURS;
  }
}
