const exchangeRates = {
  USD_BTC: 0.85,
  BTC_USD: 1.18,
};

document.getElementById("swapButton").addEventListener("click", function () {
  var currency1 = document.getElementById("currency1");
  var currency2 = document.getElementById("currency2");
  var tempCurrency = currency1.value;
  currency1.value = currency2.value;
  currency2.value = tempCurrency;
  document.getElementById("amount1").value = "";
  document.getElementById("amount2").value = "";
});

document.getElementById("convertButton").addEventListener("click", function () {
  var currency1 = document.getElementById("currency1").value;
  var currency2 = document.getElementById("currency2").value;
  var amount1 = parseFloat(document.getElementById("amount1").value);

  if (isNaN(amount1)) {
    alert("Будь ласка, введіть суму для конвертації.");
    return;
  }

  var convertedAmount;
  if (currency1 === "USD" && currency2 === "BTC") {
    convertedAmount = amount1 * exchangeRates.USD_BTC;
  } else if (currency1 === "BTC" && currency2 === "USD") {
    convertedAmount = amount1 * exchangeRates.BTC_USD;
  } else {
    alert("Конвертація для цієї пари валют не підтримується.");
    return;
  }

  document.getElementById("amount2").value = convertedAmount.toFixed(2);
});
