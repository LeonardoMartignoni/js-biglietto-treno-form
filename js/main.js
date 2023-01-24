// Aggiungo il bottone in una variabile
const submitButton = document.getElementById('send_button');

// Aggiungo un evento quanto il bottone viene premuto
submitButton.addEventListener(
    'click',

    function () {
        // Chiedo all'utente il nome e cognome
        const userFullname = document.getElementById('user_fullname').value;
        console.log(userFullname);

        // Chiedo all'utente quanti Km vuole percorrere e prendo il valore
        const userKm = document.getElementById('user_km').value;
        console.log(userKm);

        // Chiedo all'utente quanti anni ha
        const userAge = document.getElementById('user_age').value;
        console.log(userAge);

        // Fisso il prezzo per km (0.21€)
        const pricePerKm = 0.21;
        let ticketPrice = 0;

        // Se l'utente ha meno di 18 anni applico sconto del 20%
        if (userAge < 18) {
            ticketPrice = userKm * pricePerKm;
            const discountPerc = (ticketPrice / 100) * 20;
            ticketPrice = ticketPrice - discountPerc;
        }

        // Se l'utente ha più di 65 anni applico sconto del 40%
        else if (userAge >= 65) {
            ticketPrice = userKm * pricePerKm;
            const discountPerc = (ticketPrice / 100) * 40;
            ticketPrice = ticketPrice - discountPerc;
        }

        // Altrimenti non applico nessuno sconto
        else {
            ticketPrice = userKm * pricePerKm;
        }

        // Stampo il prezzo del biglietto sulla pagina
        document.getElementById('ticket_price').innerHTML = ticketPrice.toFixed(2) + '&euro;';
        // console.log(ticketPrice.toFixed(2));

        // Stampo il nome e cognome sulla pagine
        document.getElementById('passenger_name').innerHTML = userFullname;

        // Inserisco una carrozza random
        document.getElementById('train_coach').innerHTML = Math.floor(Math.random() * 10) + 1;

        // Inserisco un codice CP random, che sarà sempre di 6 cifre
        document.getElementById('cp_code').innerHTML = Math.floor(100000 + Math.random() * 900000);

    }
)