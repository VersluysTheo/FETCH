fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => data.results.forEach(element => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.style = "width: 18rem;";
    
        const cardImg = document.createElement("img");
        cardImg.src = element.image
        cardImg.className = "card-img-top"
        cardDiv.appendChild(cardImg);
    
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardDiv.appendChild(cardBody);
    
    
        const cardH5 = document.createElement("h5");
        cardH5.className = "card-title"
        const cardTitle = document.createTextNode(element.id);
        cardBody.appendChild(cardTitle);
    
        const cardP = document.createElement("p");
        cardP.className = "card-text";
        cardContent = document.createTextNode(element.name);
        cardBody.appendChild(cardP)
        cardP.appendChild(cardContent);
    
        const currentDiv = document.getElementById("card")
        document.getElementById("row").insertBefore(cardDiv, currentDiv)
    }
))


// fetch('https://rickandmortyapi.com/api/character')
// .then(response => response.json())
// .then(data => {
//     document.querySelector('h5').textContent = data.results[0].name
//     document.querySelector('p').textContent = data.results[0].id
//     document.querySelector('img').src = data.results[0].image
// })

// createElement = pour creer tes trucs de cartes 

