const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const switchButton = document.getElementById("switchButton");
const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resultDiv = document.getElementById("result");

// Conversion multipliers
const conversionRates = {
  bytes: 1,
  kb: 1024,
  mb: 1024 * 1024,
  gb: 1024 * 1024 * 1024,
  tb: 1024 * 1024 * 1024 * 1024,
};

// Convert function
function convertFileSize() {
  const value = parseFloat(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  // Check if the input is a valid number
  if (isNaN(value) || value < 0) {
    resultDiv.textContent = "Please enter a valid positive number.";
    return;
  }

  // Convert the value to bytes
  const valueInBytes = value * conversionRates[from];

  // Convert to the desired unit and round the result
  const convertedValue = Math.round(valueInBytes / conversionRates[to]);

  // Show the result
  resultDiv.textContent = `${value} ${from} = ${convertedValue} ${to}`;
}

// Reset function
function resetFields() {
  inputValue.value = "";
  fromUnit.value = "bytes";
  toUnit.value = "bytes";
  resultDiv.textContent = "";
}

// Switch function
function switchUnits() {
  const temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
}

// Event listeners
convertButton.addEventListener("click", convertFileSize);
resetButton.addEventListener("click", resetFields);
switchButton.addEventListener("click", switchUnits);

// Prevent non-numeric input
inputValue.addEventListener("input", function (event) {
  // Allow only numbers and decimals
  const regex = /^[0-9]*\.?[0-9]*$/;
  if (!regex.test(inputValue.value)) {
    inputValue.setCustomValidity("Please enter a valid number.");
  } else {
    inputValue.setCustomValidity("");
  }
});
