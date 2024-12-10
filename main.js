let inputKm = prompt("Inserisci i Km che desideri percorrere");
let inputAge = prompt("Inserisci la tua età");
const scontoUnder18 = (inputKm * 0.21) * 20 / 100;
const scontoOver65 = (inputKm * 0.21) * 40 / 100;

let outputPrice;

// console.log(typeof inputKm, inputKm);
// console.log(typeof inputAge, inputAge);

inputKm = Number(inputKm);
inputAge = Number(inputAge);

// console.log(typeof inputKm, inputKm);
// console.log(typeof inputAge, inputAge);

if(isNaN(inputKm) || isNaN(inputAge)){
    console.log("Ricarica la pagina ed inserisci i dati in formato numerico!");
} else if(inputAge < 18){
    outputPrice = (inputKm * 0.21) - scontoUnder18;
    console.log(`Il costo del biglietto è ${outputPrice.toFixed(2).replace(".",",")} €`);
}else if(inputAge > 65){
    outputPrice = (inputKm * 0.21) - scontoOver65;
    console.log(`Il costo del biglietto è ${outputPrice.toFixed(2).replace(".",",")} €`);
} else{
    outputPrice = (inputKm * 0.21)
    console.log(`Il costo del biglietto è ${outputPrice.toFixed(2).replace(".",",")} €`);
}
