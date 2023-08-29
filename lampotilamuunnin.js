const form = document.getElementById("form");
const resultText = document.getElementById("result");
const absoluteZeroText = document.getElementById("absolute-zero");
form.addEventListener("submit", convert);

const absoluteZero = -273.15;

function convert(event) {
    event.preventDefault();

    let input = document.getElementById("value").value;
    let type = document.getElementById("type").value;
    let decimals = document.forms["form"]["decimals"].value;
    let result = 0;
    let celsius = 0;

    if (isNaN(input) || input == "") {
        resultText.innerText = "Virheellinen syöte";
        absoluteZeroText.innerText = "";
        return
    }

    if (type == "celsius-to-fahrenheit") {
        result = input * 1.8 + 32;
        celsius = input;
    }
    else {
        result = (input - 32) / 1.8;
        celsius = result;
    }

    switch (decimals) {
        case "decimal1":
            resultText.innerText = result.toFixed(1);
            break;
        case "decimal2":
            resultText.innerText = result.toFixed(2);
            break;
        case "decimal3":
            resultText.innerText = result.toFixed(3);
            break;
    }

    if (celsius < absoluteZero) {
        absoluteZeroText.innerText = "Lämpötila on alle absoluuttisen nollapisteen";
    }
    else {
        absoluteZeroText.innerText = "";
    }
}