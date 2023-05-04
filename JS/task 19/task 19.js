// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";



// For selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
let selectElement1 = document.getElementById("sel1")
let selectElement2 = document.getElementById("sel2")
var swape = document.querySelector(".Swich");
var resultFrom;
var resultTo;
var searchValue;


fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(response => response.json())
  .then(data => {
    // Получаем список валют из ответа API
    const currencies = Object.keys(data.rates);

    // Добавляем каждую валюту в элемент <select>
    currencies.forEach(currency => {
      const optionElement = document.createElement("option");
      optionElement.value = currency;
      optionElement.text = currency;
      selectElement1.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error("Ошибка при загрузке списка валют:", error);
  });

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(response => response.json())
  .then(data => {
    // Получаем список валют из ответа API
    const currencies = Object.keys(data.rates);

    // Добавляем каждую валюту в элемент <select>
    currencies.forEach(currency => {
      const optionElement = document.createElement("option");
      optionElement.value = currency;
      optionElement.text = currency;
      selectElement2.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error("Ошибка при загрузке списка валют:", error);
  });

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// Function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// When user clicks, it calls function getresults
convert.addEventListener("click", () => {
// Function getresults
function getResults() {
  fetch(`${api}`)
    .then(currency => {
      return currency.json();
    }).then(displayResults);
}

// Display results after conversion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = ((toRate / fromRate)* searchValue).toFixed(2);
  finalAmount.style.display = "block";
}
getResults()
});



swape.addEventListener("click", () => {
  let selectedValue1 = selectElement1.options[selectElement1.selectedIndex].value;
  let selectedValue2 = selectElement2.options[selectElement2.selectedIndex].value;

  if (selectedValue1 !== '1' && selectedValue2 !== '1') {
    const temp = selectedValue1;
    selectedValue1 = selectedValue2;
    selectedValue2 = temp;

    selectElement1.value = selectedValue1;
    selectElement2.value = selectedValue2;
    convert.style.display = 'none'
    function displayResults(currency) {
      let fromRate = currency.rates[resultFrom];
      let toRate = currency.rates[resultTo];
      finalValue.innerHTML = ((fromRate / toRate)* searchValue).toFixed(2);
      finalAmount.style.display = "block";
    }

    function getResults() {
      fetch(`${api}`)
        .then(currency => {
          return currency.json();
        }).then(displayResults);
    }
    getResults()
  }});



// When user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
};


