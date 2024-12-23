function convertSize() {
  const inputSize = document.getElementById("inputSize").value;
  const inputUnit = document.getElementById("inputUnit").value;

  if (!inputSize || inputSize < 0) {
    document.getElementById("output").innerText = "Please enter a valid file size.";
    return;
  }

  const sizeInBytes = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };

  const bytes = inputSize * sizeInBytes[inputUnit];
  const output = `
    Bytes (B): ${bytes.toFixed(2)} B<br>
    Kilobytes (KB): ${(bytes / sizeInBytes.KB).toFixed(2)} KB<br>
    Megabytes (MB): ${(bytes / sizeInBytes.MB).toFixed(2)} MB<br>
    Gigabytes (GB): ${(bytes / sizeInBytes.GB).toFixed(2)} GB<br>
    Terabytes (TB): ${(bytes / sizeInBytes.TB).toFixed(2)} TB
  `;

  document.getElementById("output").innerHTML = output;
}
