// Conversion factors
const conversionFactors = {
    bytes: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
    tb: 1024 * 1024 * 1024 * 1024
};

// Function to convert file sizes
function convertSize() {
    // Get user inputs
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    // Validate input
    if (isNaN(inputValue) || inputValue < 0) {
        document.getElementById("result").innerText = "Please enter a valid size.";
        return;
    }

    // Convert input to bytes
    const valueInBytes = inputValue * conversionFactors[inputUnit];

    // Convert bytes to the desired unit
    const convertedValue = valueInBytes / conversionFactors[outputUnit];

    // Display the result
    document.getElementById("result").innerText = 
        `${inputValue} ${inputUnit.toUpperCase()} is equal to ${convertedValue.toFixed(6)} ${outputUnit.toUpperCase()}`;
}


