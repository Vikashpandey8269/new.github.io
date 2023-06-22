const catAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catAPI).then(Response => Response.json())
.then(data =>{
    const table =document.getElementById('cat-table');

    console.log(data);
    const createTables = () =>{
        table.innerHTML='';

        catData.forEach(cat => {
            const row =document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent= cat.name;
            row.appendChild(nameCell);

           

             

             table.appendChild(row);



            
        });
    }

})