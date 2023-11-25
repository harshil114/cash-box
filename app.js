const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#btn");
const message = document.querySelector("#error");
const noForNotes =document.querySelectorAll(".no-of-notes")
notes = [500,200,100,50,20,10,5,1]

// console.log(amount,cash,billAmount,cashGiven);

btn.addEventListener("click",clickHandler)
function clickHandler(){
    const amount = Number(billAmount.value);
    const cash = Number(cashGiven.value);
     message.style.display = "none";
    if(amount > 0){
        if(cash > amount){
            const amountToReturn = cash - amount;
            calculateChange(amountToReturn);   
        }else if(cash === amount){    
            errorMessage("No money needed to be return");
        }else{
            errorMessage("Paid money must be same as price or more than it.");
        }
    }else{
        errorMessage("Invalid Price"); 
    }   
};

function calculateChange(amountToReturn){
    for(let i=0; i<notes.length; i++){
        const numberOfNotes = Math.trunc(amountToReturn/notes[i]);
         amountToReturn %= notes[i];
         noForNotes[i].innerText = numberOfNotes;
    }
}
function errorMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}