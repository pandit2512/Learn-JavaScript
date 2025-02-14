const form = document.getElementById("CurrencyForm");

let fromCurrency;
let toCurrency;
let amount;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  //fetching values
  console.log(e.target.fromCurrency.value);
  console.log(e.target.toCurrency.value);
  console.log(e.target.amount.value);

  // saving values
  fromCurrency = e.target.fromCurrency.value;
  toCurrency = e.target.toCurrency.value;
  amount = e.target.amount.value;

  const API = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(API)
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      console.log(data["rates"][`${toCurrency}`]);
      console.log(amount * data["rates"][`${toCurrency}`]);
      let finalAnswer = amount * data["rates"][toCurrency];

      // Now printing Answer in <h1>
      document.querySelector(
        ".answer"
      ).innerText = `${amount} ${fromCurrency}= ${finalAnswer} ${toCurrency}`;
    });
});
