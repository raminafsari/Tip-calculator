// Wait until the page loads before running
document.addEventListener("DOMContentLoaded", () => {
  const billInput = document.getElementById("billAmount");
  const tipSelect = document.getElementById("tipPercent");
  const customTipInput = document.getElementById("customTip");
  const calcBtn = document.getElementById("calcBtn");
  const resultDiv = document.getElementById("result");
  const errorMsg = document.getElementById("errorMsg");

  // Show custom tip input if "Custom" is selected
  tipSelect.addEventListener("change", () => {
    if (tipSelect.value === "custom") {
      customTipInput.style.display = "block";
    } else {
      customTipInput.style.display = "none";
    }
  });

  // Calculate tip and total
  calcBtn.addEventListener("click", () => {
    const billAmount = parseFloat(billInput.value);
    const tipPercent =
      tipSelect.value === "custom"
        ? parseFloat(customTipInput.value)
        : parseFloat(tipSelect.value);

    if (isNaN(billAmount) || billAmount <= 0) {
      errorMsg.textContent = "Please enter a valid bill amount.";
      resultDiv.textContent = "";
      return;
    }

    if (isNaN(tipPercent) || tipPercent < 0) {
      errorMsg.textContent = "Please enter a valid tip percentage.";
      resultDiv.textContent = "";
      return;
    }

    errorMsg.textContent = "";

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;

    resultDiv.innerHTML = `
       Tip: £${tipAmount.toFixed(2)} <br>
       Total: £${totalAmount.toFixed(2)}
    `;
  });
});
