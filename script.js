document.getElementById("convert-btn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = 0;
    let convertedUnit = "";

    // Convert based on selected unit
    switch (unit) {
        case "Celsius":
            convertedTemp = (temperature * 9) / 5 + 32;
            convertedUnit = "Fahrenheit";
            break;
        case "Fahrenheit":
            convertedTemp = ((temperature - 32) * 5) / 9;
            convertedUnit = "Celsius";
            break;
        case "Kelvin":
            convertedTemp = temperature - 273.15;
            convertedUnit = "Celsius";
            break;
        default:
            resultDiv.textContent = "Invalid conversion.";
            return;
    }

    // Add Kelvin conversion
    if (unit === "Celsius") {
        convertedTemp = temperature + 273.15;
        convertedUnit = "Kelvin";
    } else if (unit === "Kelvin") {
        convertedTemp = temperature + 273.15;
        convertedUnit = "Kelvin";
    }

    resultDiv.textContent = `${temperature}° ${unit} = ${convertedTemp.toFixed(2)}° ${convertedUnit}`;
});
