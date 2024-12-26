document.getElementById("convertBtn").addEventListener("click", function() {
    // Get input values
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;

    // Perform conversion
    var convertedTemperature;
    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
    }

    // Display result
    document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + (unit === "celsius" ? "Fahrenheit" : "Celsius");
});
