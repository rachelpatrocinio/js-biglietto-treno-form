// Dichiarare una variabile per il bottone submit Refresh
const submitRefresh = document.getElementById("refresh");

submitRefresh.addEventListener('click', function(){
    location.reload();
})

// Dichiare una variabile per il bottone sumbit Generate
const submitGenerate = document.getElementById("generate");

submitGenerate.addEventListener('click', function(){
    //console.log("Clicked");
    // Scrivere un programma che chieda all’utente:
    // Il numero di chilometri da percorrere
    const km = parseInt(document.getElementById("km").value);
    console.log(km);

    // Età del passeggero
    const passengerAge = document.getElementById("age").value;
    console.log(passengerAge);

    // Nome e Cognome del passeggero
    const passengerName = document.getElementById("name").value;
    console.log(passengerName);

    if (passengerName.length > 0 &&
        km > 0 && 
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

        //STAMPIAMO IN PAGINA IL TICKET CON I DATI 
        const ticket = document.getElementById("ticket");
        ticket.innerHTML = `
        <h6 id="printed-name">Name & Surname: ${passengerName}</h6>
        <h6 id="ticket-fare">Ticket Fare: € ${ticketFare}</h6>
        <h6 id="printed-offer">Discount: ${discountPercentage} </h6>
        <h6 id="printed-fare">Costo Biglietto: € ${finalFare}</h6>
        `;

        const ticketQRCode = document.querySelector(".card-body");
        ticketQRCode.innerHTML += `
        <img src="./img/qrcode.svg" class="w-25">`;

        
        }

    else{
        const errorName = document.querySelector(".error-name");
        errorName.classList.remove("d-none");
        errorName.classList.add("d-inline-block");
        if (passengerName.length > 0){
            errorName.classList.remove("d-inline-block");
            errorName.classList.add("d-none");
        }

        const errorKm = document.querySelector(".error-km");
        errorKm.classList.remove("d-none");
        errorKm.classList.add("d-inline-block");
        if  (
            km > 0 && 
            !isNaN(km)){
            errorKm.classList.remove("d-inline-block");
            errorKm.classList.add("d-none");
        }
    }
})

