const apiKey = "Your_api_key";
const url = "https://v6.exchangerate-api.com/v6//latest/";


const dropDown = document.querySelectorAll(".selectFormBorder select");
const btn = document.querySelector(".btn");
const frmCurr = document.querySelector(".fromSelector select");
const toCurr = document.querySelector(".ToSelector select");
const message = document.querySelector(".message");
let i = 0;
for (let select of dropDown) {
  for (currCode in countryList) {
    // console.log(currCode, countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    if (select.name === "Form" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currCode === "BDT") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  // console.log(element);
  let currCode = element.value;
  // console.log(currCode);
  let countryCode = countryList[currCode];
  // console.log(countryCode);
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  // console.log(newSrc);
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

async function currencyConverter(fromCurrencyCode, toCurrencyCode, amount) {
  //   console.log(message.innerText);
//   console.log(fromCurrencyCode);
//   console.log(toCurrencyCode);
//   console.log(amount);
  let sendUrl = `https://v6.exchangerate-api.com/v6/${apiKey}latest/${fromCurrencyCode}`
    let response = await fetch(sendUrl);
  //   console.log(response);
  let data = await response.json();
  //   console.log(data);
  const rates = data.conversion_rates;
  //   console.log("print from funciton" + rates[targetCurrency]);
  message.innerText = `${amount}${fromCurrencyCode}= ${rates[toCurrencyCode]*amount}${toCurrencyCode}`;
  //   console.log(message.textContent);
  // return rates[targetCurrency];
}
//button
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".ConverterForm input");
  let amtVal = amount.value;
  // console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  let fromCurrencyCode = frmCurr.value;
  let toCurrencyCode = toCurr.value;
  currencyConverter(fromCurrencyCode, toCurrencyCode, amtVal);
});
