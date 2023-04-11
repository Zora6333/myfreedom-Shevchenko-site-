fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });

const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`;

const select1 = document.querySelector('.currency-selector1');
const select2 = document.querySelector('.currency-selector2');
const input1 = document.querySelector('.currency1');
const input2 = document.querySelector('.currency2');
let currencies = {};

function fetchCurrencies() {
    return new Promise((resolve, reject) => {
      fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  const option = document.querySelector('option');

  option.addEventListener('click', () => {
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
      .then(response => response.json())
      .then(data => {
        const currencies = {};
  
        // Store the exchange rates in the currencies object
        for (const [key, value] of Object.entries(data.rates)) {
          currencies[key] = value;
        }
  
        // Update the input fields based on the initial currency values
        updateInputFields(currencies);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  });
  
  function updateInputFields() {

    const currency1 = select1.value;
    const currency2 = select2.value;
    const rate1 = currencies[currency1];
    const rate2 = currencies[currency2];
    const value1 = parseFloat(input1.value);
    console.log('currency1:', currency1, 'rate1:', rate1, 'currency2:', currency2, 'rate2:', rate2, 'value1:', value1);
    const value2 = input1.value === '' ? '' : (value1 * rate1 / rate2).toFixed(2);
    console.log('value2:', value2);
    input2.value = value2;
  }
  select1.addEventListener('change', updateInputFields);
  select2.addEventListener('change', updateInputFields);
  input1.addEventListener('input', updateInputFields);
  
  fetchCurrencies()
    .then(data => {
      currencies = data;
      for (const [key, value] of Object.entries(data)) {
        const option = document.createElement('option');
        option.value = key;
        option.text = `${key} (${value})`;
        select1.add(option.cloneNode(true));
        select2.add(option);
      }
    })
    .catch(error => console.error(error));


