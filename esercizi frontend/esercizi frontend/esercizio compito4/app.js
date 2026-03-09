const button = document.getElementById("button");
const container = document.getElementById("card-container");

// FETCH dei dati
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {

data.forEach(user => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${user.name}</h3>
<p>${user.email}</p>
<p>${user.address.city}</p>
`;

container.appendChild(card);

});

});

// BUTTON che cambia lo sfondo delle card
button.addEventListener("click", function(){

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

card.classList.toggle("blue");


});

});