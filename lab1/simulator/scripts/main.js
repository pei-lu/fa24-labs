// Thanks to the UI provided by https://codepen.io/MinzCode/pen/rNxYYaZ

let clock_container = document.getElementById('clock');

function createDisplay(id) {
    let div = document.createElement('div');
    div.innerHTML = `<svg id="display-${id}" width="130" height="240" viewBox="0 0 260 480">
                    <use id="segment-${id}a" xlink:href="#unit-h" class="segment" x="30" y="0"></use>
                    <use id="segment-${id}b" xlink:href="#unit-v" class="segment" x="220" y="30"></use>
                    <use id="segment-${id}c" xlink:href="#unit-v" class="segment" x="220" y="250"></use>
                    <use id="segment-${id}d" xlink:href="#unit-h" class="segment" x="30" y="440"></use>
                    <use id="segment-${id}e" xlink:href="#unit-v" class="segment" x="0" y="250"></use>
                    <use id="segment-${id}f" xlink:href="#unit-v" class="segment" x="0" y="30"></use>
                    <use id="segment-${id}g" xlink:href="#unit-h" class="segment" x="30" y="220"></use>
                </svg>`

    return div;
}

function setDisplay(id, bit_vector) {
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach((seg, idx) => {
        let segment = document.getElementById(`segment-${id}${seg}`);
        if ((bit_vector & (1 << idx)) !== 0) {
            segment.classList.add("on");
        } else {
            segment.classList.remove("on");
        }
    })
}

function setDisplays() {
    for (let i = 5; i >= 0; i--) {
        setDisplay(i, Module._get_seven_segment_output(i));
    }
}

let setup_time = false;
let setup_alarm = false;

function setButtons() {
    const setup = setup_time || setup_alarm;
    document.getElementById("adv-min-button").disabled = !setup;
    document.getElementById("adv-hr-button").disabled = !setup;

    if (setup_time) {
      document.getElementById("setup-time-switch").classList.remove("outline");
      document.getElementById("setup-time-switch").innerText = "Exit Setup Time"
    } else {
      document.getElementById("setup-time-switch").classList.add("outline");
      document.getElementById("setup-time-switch").innerText = "Enter Setup Time"
    }

    if (setup_alarm) {
      document.getElementById("setup-alarm-switch").classList.remove("outline");
      document.getElementById("setup-alarm-switch").innerText = "Exit Setup Alarm"
    } else {
      document.getElementById("setup-alarm-switch").classList.add("outline");
      document.getElementById("setup-alarm-switch").innerText = "Enter Setup Alarm"
    }
}

function toggleSetupTime() {
    setup_time = !setup_time;
    if (setup_time) {
        Module._enable_setup_time();
    } else {
        Module._disable_setup_time();
    }
    setButtons();
    setDisplays();
}

function toggleSetupAlarm() {
    setup_alarm = !setup_alarm;
    if (setup_alarm) {
        Module._enable_setup_alarm();
    } else {
        Module._disable_setup_alarm();
    }
    setButtons();
    setDisplays();
}

function advanceMinute() {
    for (let i = 0; i < parseInt(document.getElementById("num-increment").value); i++) {
        Module._advance_minute()
    }
    setDisplays();
}

function advanceHour() {
    for (let i = 0; i < parseInt(document.getElementById("num-increment").value); i++) {
        Module._advance_hour()
    }
    setDisplays();
}

let currentInterval = setInterval(() => {Module._clk();setDisplays();}, 1000);
function updateInterval() {
    const val = document.getElementById("update-interval").value
    if (val > 0) {
        document.getElementById("update-interval").setAttribute("aria-invalid", false);
        clearInterval(currentInterval);
        currentInterval = setInterval(() => {Module._clk();setDisplays();}, parseInt(val));
    } else {
        document.getElementById("update-interval").setAttribute("aria-invalid", true);
    }
}

for (let i = 5; i >= 0; i--) {
    clock_container.appendChild(createDisplay(i));
}

