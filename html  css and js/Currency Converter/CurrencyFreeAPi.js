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
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

async function currencyConverter(fromCurrencyCode, toCurrencyCode, amount) {
  let sendUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrencyCode}.json`;
    let response = await fetch(sendUrl);
  let data = await response.json();
  let rates = data[fromCurrencyCode][toCurrencyCode];
  rates = rates.toFixed(2);
  message.innerText = `${amount} ${fromCurrencyCode}= ${rates*amount} ${toCurrencyCode}`;
  
}
//button
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".ConverterForm input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  let fromCurrencyCode = frmCurr.value.toLowerCase();
  let toCurrencyCode = toCurr.value.toLowerCase();
  currencyConverter(fromCurrencyCode, toCurrencyCode, amtVal);
});
