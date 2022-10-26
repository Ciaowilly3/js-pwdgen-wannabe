// chiedo all'utente di inserire le variabili 
const userName = prompt("Ciao utente, inserisci il tuo nome");
const userSurname = prompt("ora il cognome");
const preferredColor = prompt("qual è il tuo colore preferito?");

// Quindi sommo le varie stringhe per ottenere la password in una variabile che chiamo passwordBuilder
const fullName = userName + userSurname;

const passwordBuilder = fullName + preferredColor;

// lego la variabile password allo span nell'HTMNL tramite l'ID
const password = document.getElementById("password");

// quindi sostituisco il contenuto dello span con la variabile passwordBuilder
password.innerHTML = `${passwordBuilder}21`;