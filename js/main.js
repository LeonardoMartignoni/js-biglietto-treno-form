// Chiedo all'utente quanti Km vuole fare
const userKm = document.getElementById('user_km');
console.log(userKm);

// Chiedo all'utente quanti anni ha
const userAge = document.getElementById('user_age');
console.log(userKm);

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