// Dichiare una variabile per il bottone sumbit
const submitElement = document.getElementById("submit");

submitElement.addEventListener('click', function(){
    //console.log("Clicked");
    // Scrivere un programma che chieda all’utente:
    // Il numero di chilometri da percorrere
    const km = parseInt(document.getElementById("km").value);
    console.log(km);

    // Età del passeggero
    const passengerAge = document.getElementById("age").value;
    console.log(passengerAge);

    if (km > 0 && 
        !isNaN(km))
        {
        // calcolare il prezzo totale del viaggio, secondo queste regole:
        // il prezzo del biglietto è definito in base ai km (0.21 € al km)
        const ticketFare = (km * 0.21).toFixed(2); //num
        console.log("Ticket Fare:",ticketFare, "€");
    
        //L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo.
        // IF utente è minorenne, il prezzo sarà scontato del 20%
        // ELSE IF utente è over 65, il prezzo sarà scontato del 40%
        // ELSE prezzo normale
        let discount = 0;
        let discountPercentage = 0;
        if (passengerAge === "minor"){
            //console.log(userAge, "You are a Minor");
            discountPercentage = "20%";
            discount = (ticketFare * 0.2).toFixed(2);
            console.log(discount);
        } else if(passengerAge === "senior"){
            //console.log(userAge,"You are a Senior Citizen.");
            discountPercentage = "40%";
            discount = (ticketFare * 0.4).toFixed(2);
            console.log(discount);
        }
    
        const finalFare = (ticketFare - discount).toFixed(2);
        console.log("Final Fare:", finalFare, "€");

        const ticket = document.getElementById("ticket");
        ticket.innerHTML += `
        <h4>Ticket Fare: € ${ticketFare} </h4>
        <h4>Your Discount: ${discountPercentage} </h4>
        <h3>Final Fare is € ${finalFare} </h3>
        `;
        }

    else{
        const error = document.querySelector(".error");
        console.log(error);
        error.classList.remove("d-none");
        error.classList.add("d-inline-block");
    }
})

