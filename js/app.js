// Dichiare una variabile per il bottone sumbit
const submitElement = document.getElementById("submit");

submitElement.addEventListener('click', function(){
    //console.log("Clicked");
    // Scrivere un programma che chieda all’utente:
    // Il numero di chilometri da percorrere
    const km = parseInt(document.getElementById("km").value);
    console.log(km);

    // Età del passeggero
    const passengerAge = parseInt(document.getElementById("age").value);
    console.log(passengerAge);

    if (km > 0 && 
        passengerAge > 0 &&
        !isNaN(km) &&
        !isNaN(passengerAge)){
        // calcolare il prezzo totale del viaggio, secondo queste regole:
        // il prezzo del biglietto è definito in base ai km (0.21 € al km)
        const ticketPrice = km * 0.21; //num
        console.log("Full Price:",ticketPrice.toFixed(2), "€");
    
        //L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo.
        // IF utente è minorenne, il prezzo sarà scontato del 20%
        // ELSE IF utente è over 65, il prezzo sarà scontato del 40%
        // ELSE prezzo normale
        let discount = 0;
        if (passengerAge < 18){
            //console.log(userAge, "You are a Minor");
            discount = ticketPrice * 0.2;
        } else if(passengerAge >= 65){
            //console.log(userAge,"You are a Senior Citizen.");
            discount = ticketPrice * 0.4;
        }
    
        const finalPrice = (ticketPrice - discount).toFixed(2);
        console.log("Final Price:", finalPrice, "€");

        const ticket = document.getElementById("ticket");
        ticket.innerHTML += `
        <span> ${finalPrice} </span>
        `;
        }
    else{
        const error = document.querySelector(".error");
        console.log(error);
        error.classList.remove("d-none");
        error.classList.add("d-inline-block");
    }
})

