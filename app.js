const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#btn");
const message = document.querySelector("#error");
const noForNotes =document.querySelectorAll(".no-of-notes")
notes = [500,200,100,50,20,10,5,1]

btn.addEventListener("click",clickHandler)
function clickHandler(){
    message.style.display = "none";
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn);
        }else if(cashGiven.value === billAmount.value){            
            errorMessage("No change needed to be return");
        }else{
            errorMessage("Cash must be same as bill or more than it.");
        }
    }else{
        errorMessage("Invalid Bill");    
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