

const countriesAPI = "https://restcountries.com/v2/all";



fetch(countriesAPI).then(Response => Response.json())

.then(data=>{
    const table =document.getElementById('countries-table');
    const searchInput =document.getElementById('search-input');

    let countriesData = data.slice(0,20);

    //console.log(countriesData);
   
    const createTables = () =>{
        table.innerHTML='';

        countriesData.forEach(country => {
            const row =document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent= country.name;
            row.appendChild(nameCell);

            const capitalCell = document.createElement('td');
            capitalCell.textContent= country.capital;

            row.appendChild(capitalCell);

             const languagesCell = document.createElement('td');
             const languages =country.languages.map(lang=>lang.name).join(',');
             

             languagesCell.textContent =languages;

             row.appendChild(languagesCell);

             const populationCell =document.createElement('td');
             populationCell.textContent =country.population;
             row.appendChild(populationCell);


             const areaCell = document.createElement('td');
             areaCell.textContent =country.area;
             row.appendChild(areaCell);

             

             table.appendChild(row);



            
        });
    }

    const handleSearch = () =>{
        const searchTerm = searchInput.value.toLowerCase();
        countriesData =data.filter(country =>{
            return country.name.toLowerCase().includes(searchTerm);
            
        });
        createTables();
    }
        searchInput.addEventListener('input',handleSearch);

        createTables();
    
})
.catch(error => console.log(error));
