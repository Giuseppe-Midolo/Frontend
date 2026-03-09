 // Seleziono elementi
        const lista = document.getElementById("lista");
        const aggiungiBtn = document.getElementById("aggiungiBtn");
        const eliminaBtn = document.getElementById("eliminaBtn");

                                    // Contatore per numerare gli item
        let contatore = 3;

                                    // Evento click per aggiungere un nuovo item
        aggiungiBtn.addEventListener("click", function() {

                                  // Creo nuovo elemento li
            const nuovoItem = document.createElement("li");

                                   // Aggiungo testo
            nuovoItem.textContent = "Item " + contatore;

                                  // Inserisco nella lista
            lista.appendChild(nuovoItem);

                                  // Incremento contatore
            contatore++;
        });

                                                          // Evento click per eliminare l'ultimo item
        eliminaBtn.addEventListener("click", function() {

                                                    // Controllo se esistono elementi nella lista
            if (lista.children.length > 0) {

                                                         // Rimuovo l'ultimo elemento
                lista.removeChild(lista.lastElementChild);

                                                          // Decremento contatore
                contatore--;
            } else {
                alert("La lista è vuota!");
            }

        });