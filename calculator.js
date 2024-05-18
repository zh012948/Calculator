
const display = document.getElementById("display");
const keys = document.getElementById("keys");

// Add event listeners to all buttons inside the #keys div


keys.addEventListener("click", function (event) {
    if (event.target.textContent === "C") {
        Clear();
    }
    if (event.target.textContent === "=") {
        Calculate();
    }
    if (event.target.textContent !== "C" && event.target.textContent !== "=" && event.target.textContent !== "⌫") {
        appendToDisplay(event.target.textContent);
    }

});

function appendToDisplay(input) {
    display.value += input;
}

function Clear() {
    display.value = "";
    // Clear();
}

function Calculate() {

    try {
        const result = eval(display.value);
        if (isNaN(result)) {
            throw new Error("Error");
        }
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";

    }
    finally {

    }
}

function BackSpace() {
    display.value = display.value.substring(0, display.value.length - 1);
}