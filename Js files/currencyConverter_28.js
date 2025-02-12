const form = document.getElementById("CurrencyForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.fromCurrency.value);
  console.log(e.target.toCurrency.value);
  console.log(e.target.amount.value);
});
