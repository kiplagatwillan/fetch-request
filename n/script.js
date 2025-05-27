const button = document.querySelector('#button');
const input = document.querySelector('#search');
const result = document.querySelector('.placeholder-name');
const countryNames = new Intl.DisplayNames(['en'], { type: 'region' });
button.addEventListener('click', async () => {
 const name = input.value;
 if (name === '') {
    result.textContent = '  Error, tr again';
    return;}
try {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    if(!response.ok){
      throw new Error('Something went wrong, please try again.'); }
    const data = await response.json();
    const topCountry = data.country[0];
    if (topCountry) {
      const fullCountryName = countryNames.of(topCountry.country_id);
      const probability = topCountry.probability * 100;
      result.textContent = `${name} is from ${fullCountryName} with ${probability}% certainty`;
    } else {
      result.textContent = `No country data found for the name "${name}".`;}
  } 
  catch (error) {
    result.textContent = error.message;}
});
