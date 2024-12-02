function convertSize() {
  const inputSize = document.getElementById("fileSize").value;
  const unitFrom = document.getElementById("unitFrom").value;

  if (!inputSize || inputSize <= 0) {
    document.getElementById("results").innerText = "Please enter a valid file size.";
    return;
  }

  const units = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };

  const sizeInBytes = inputSize * units[unitFrom];

  const resultsHTML = `
    <p><strong>Bytes (B):</strong> ${sizeInBytes.toFixed(2)} B</p>
    <p><strong>Kilobytes (KB):</strong> ${(sizeInBytes / units.KB).toFixed(2)} KB</p>
    <p><strong>Megabytes (MB):</strong> ${(sizeInBytes / units.MB).toFixed(2)} MB</p>
    <p><strong>Gigabytes (GB):</strong> ${(sizeInBytes / units.GB).toFixed(2)} GB</p>
    <p><strong>Terabytes (TB):</strong> ${(sizeInBytes / units.TB).toFixed(2)} TB</p>
  `;

  document.getElementById("results").innerHTML = resultsHTML;
}

