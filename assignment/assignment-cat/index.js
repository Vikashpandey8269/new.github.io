
       
              
       
       
       //EXERCISE2-print all cat names
       
              const catsAPI = "https://api.thecatapi.com/v1/breeds";
               fetch(catsAPI)
                 .then(response => response.json())
                 .then(data => {
                   const catNames = data.map(cat => cat.name);
       
                   const catNamesList = document.createElement('ul');
                   catNames.forEach(catName => {
                     const listItem = document.createElement('li');
                     listItem.textContent = catName;
                     listItem.classList.add('cats')
                     catNamesList.appendChild(listItem);
                   });
                   document.body.appendChild(catNamesList);
                 })
                 .catch(error => console.log(error));
       
       
       //EXERCISE3.1
       
              // average weight of cat in metric unit.
               fetch(catsAPI)
                 .then(response => response.json())
                 .then(data => {
                   const weights = data.map(cat => cat.weight.metric.split(" - "));
                   const averageWeight = weights.reduce((sum, weight) => {
                     const [min, max] = weight.map(w => parseFloat(w));
                     return sum + (min + max) / 2;
                   }, 0) / weights.length;
                   const line=document.createElement('hr')
                   const line2=document.createElement('hr')
                   const averageWeightText = document.createElement('p');
                   averageWeightText.textContent = `Average Weight of cats : ${averageWeight}`;
                   averageWeightText.classList.add('average')
                   document.body.appendChild(line);
                   document.body.appendChild(averageWeightText);
                   document.body.appendChild(line2);
                 })
                 .catch(error => console.log(error));
       
              