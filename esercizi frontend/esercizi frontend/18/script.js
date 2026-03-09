// SELEZIONE ELEMENTI
const addMovieBtn = document.querySelector("header button"); // bottone ADD MOVIE
const addModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addModal.querySelector(".btn--passive");

// FUNZIONE PER APRIRE LA MODALE
function openAddMovieModal() {
  addModal.classList.add("visible");
  backdrop.classList.add("visible");
}

// FUNZIONE PER CHIUDERE LA MODALE
function closeAddMovieModal() {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
}

// APERTURA MODALE AL CLICK SUL BOTTONE
addMovieBtn.addEventListener("click", openAddMovieModal);

// CHIUSURA MODALE AL CLICK SUL CANCEL
cancelAddMovieBtn.addEventListener("click", closeAddMovieModal);

// CHIUSURA MODALE CLICCANDO SULL'OVERLAY
backdrop.addEventListener("click", closeAddMovieModal);

// IMPEDISCE LA CHIUSURA SE CLICCHI DENTRO LA MODALE
addModal.addEventListener("click", function(event) {
  event.stopPropagation();
});
