// https://medium.com/@bcode/javascriptte-fetch-3ebdc6119c51

/* 
FETCH();
Ajax yerine alternatif olarak asenkron veri alma ve veri gönderme apisidir. 
Fetch api olumlu işlemi promise olarak yani resolve diye dönüyor. 
Bunu then ile yakalayabiliyoruz.
Aslında Fetch api bize promise döner. 
Eğer sonuç olumlu ise then hatalı ise catch ile yakalayabiliyoruz.
Fetch api Window objesinin içinde bulunur.
 */
const endpoint = 'tr.json';

const cities = [];

//fetch(endpoint).then(blob => console.log(blob));

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));//spread methodu

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      //eşleşip eşleşmeme durumu
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) 
    });
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


  
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
  
    return `
      <li>
        <span class="name">${cityName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
