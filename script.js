let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function calculate() {
    try {
      let result = eval(display.value);
      // Rounding the result to 4 decimal places
      display.value = result.toFixed(4);
    } catch (error) {
      display.value = "Error";
    }
  }
  