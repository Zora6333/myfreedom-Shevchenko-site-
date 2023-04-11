$(document).ready(function() {
  const countries = ["Russia", "United States", "China", "Japan", "Germany", "Brazil"];
  const url = "https://restcountries.com/v3.1/name/";

  for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i];
    const fullUrl = url + countryName + "?fullText=true";
    
    $.ajax({
      url: fullUrl,
      success: function(data) {
        const countryData = data[0];
        const countryCard = `
          <div class="col">
            <div class="card">
              <img src="${countryData.flags.png}" class="card-img-top" alt="${countryData.name.common} flag">
              <div class="card-body">
                <h5 class="card-title">${countryData.name.common}</h5>
                <p class="card-text">Capital: ${countryData.capital}</p>
                <p class="card-text">Population: ${countryData.population}</p>
              </div>
            </div>
          </div>
        `;
        $("#countries-container").append(countryCard);
      },
      error: function() {
        console.log(`Error loading data for country: ${countryName}`);
      }
    });
  }
});





