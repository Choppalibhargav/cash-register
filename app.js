const bill = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashGvn");
const nxtbutton = document.querySelector("#nxtBtn");
const checkButton = document.querySelector("#showBtn");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const tableHide = document.querySelector("#table-notes");
const cash = document.querySelector("#cashh");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nxtbutton.addEventListener("click", checkNext);





checkButton.addEventListener("click", checkLegality);
cashGiven.style.display = "none";

checkButton.style.display = "none";


function checkNext() {
  cashGiven.style.display = "block";

  checkButton.style.display = "block";
  cash.style.display = "block";
}


function checkLegality() { 
  message.style.display = "none";


  if (bill.value > 0) {


    if (cashGiven.value >= bill.value) {
      const amtreturn = cashGiven.value - bill.value;
      calculateChange(amtreturn);
      tableHide.style.display = "block";
    } else {
      errorMessage("The cash should be atleast equal to bill amount");
    }
  } else {
    errorMessage("Kindly enter valid bill amount(Must be positive value");
  }
}

function errorMessage(msg) { 
  message.style.display = "block";
  message.innerHTML = msg;
}

function calculateChange(amtreturn) { 
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(
      amtreturn / availableNotes[i]
    );
    amtreturn = amtreturn % availableNotes[i];
    notes[i].innerHTML = numberofNotes;
  }
}