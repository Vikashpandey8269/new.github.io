
//exercise 1
const countriesAPI = "https://restcountries.com/v2/all";
   
//EXERCISE1
    // Fetch the data from the countries API
    fetch(countriesAPI)
      .then(response => response.json())
      .then(data => {
        const table = document.getElementById('countries-table');
        const searchInput = document.getElementById('search-input');
        let countriesData = data.slice(0, 20); // Select first 20 countries

        // Create a table row for each country
        const createTable = () => {
          table.innerHTML = '';

          countriesData.forEach(country => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = country.name;
            row.appendChild(nameCell);

            const capitalCell = document.createElement('td');
            capitalCell.textContent = country.capital;
            row.appendChild(capitalCell);

            const languagesCell = document.createElement('td');
            const languages = country.languages.map(lang => lang.name).join(', ');
            languagesCell.textContent = languages;
            row.appendChild(languagesCell);

            const populationCell = document.createElement('td');
            populationCell.textContent = country.population;
            row.appendChild(populationCell);

            const areaCell = document.createElement('td');
            areaCell.textContent = country.area;
            row.appendChild(areaCell);

            table.appendChild(row);
          });
        };
        // Handle search functionality
        const handleSearch = () => {
          const searchTerm = searchInput.value.toLowerCase();
          countriesData = data.filter(country => {
            return country.name.toLowerCase().includes(searchTerm);
          });
          createTable();
        };
        // Add event listener for search input
        searchInput.addEventListener('input', handleSearch);
        // Initial table creation
        createTable();




//EXERCISE3

       

       //10 largest countries

        const largestCountries = data
          .filter(country => country.area !== null)
          .sort((a, b) => b.area - a.area)
          .slice(0, 10)
          .map(country => country.name);
          const line3=document.createElement('hr')
        const topten=document.createElement('div')
        const largestCountriesList = document.createElement('ul');
        largestCountries.forEach(country => {
          const listItem = document.createElement('li');
          listItem.textContent = country;
          largestCountriesList.appendChild(listItem);
        });
        document.body.appendChild(line3);
        document.body.appendChild(line3);
        
        document.body.appendChild(largestCountriesList);
     
        // total number of languages in the world used as officials.

        const totalLanguages = data.reduce((total, country) => {
          return total + country.languages.length;
        }, 0);
        const line=document.createElement('hr')
        const line2=document.createElement('hr')
        const totalLanguagesElement = document.createElement('p');
        totalLanguagesElement.textContent = `Total number of languages used as officials: ${totalLanguages}`;
        totalLanguagesElement.classList.add("totalcountry")
        document.body.appendChild(line);
        document.body.appendChild(totalLanguagesElement);
        document.body.appendChild(line2);
      })
      .catch(error => console.log(error));
