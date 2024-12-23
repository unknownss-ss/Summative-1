// JavaScript for File Converter
document.getElementById('convert-btn').addEventListener('click', function () {
    const input1 = parseFloat(document.getElementById('input1').value);
    const unit1 = document.getElementById('unit1').value;
    const unit2 = document.getElementById('unit2').value;

    if (isNaN(input1)) {
        alert('Please enter a valid number!');
        return;
    }

    // Conversion logic
    const unitConversion = {
        bytes: 1,
        kilobytes: 1024,
        megabytes: 1024 ** 2,
        gigabytes: 1024 ** 3,
        terabytes: 1024 ** 4
    };

    const result = (input1 * unitConversion[unit1]) / unitConversion[unit2];
    document.getElementById('input2').value = result.toFixed(2); // Display result
});

// Reset functionality
document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('unit1').value = 'bytes';
    document.getElementById('unit2').value = 'bytes';
});

// Switch functionality
document.getElementById('switch-btn').addEventListener('click', function () {
    // Swap the units
    const unit1 = document.getElementById('unit1');
    const unit2 = document.getElementById('unit2');
    [unit1.value, unit2.value] = [unit2.value, unit1.value];
});


