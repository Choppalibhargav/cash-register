const bill = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashGvn");
const nxtbutton = document.querySelector("#nxtBtn");
const checkButton = document.querySelector("#showBtn");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const tableHide = document.querySelector("#table-notes");
const csh = document.querySelector("#cashh");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nxtbutton.addEventListener("click", checkAbc);





checkButton.addEventListener("click", checkLegality); // Adding a function on click of an event of click
cashGiven.style.display = "none";

checkButton.style.display = "none";


function checkAbc() {
  cashGiven.style.display = "block";

  checkButton.style.display = "block";
  csh.style.display = "block";
}


function checkLegality() { //function to check wrong input
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

function errorMessage(msg) { //function to display error message
  message.style.display = "block";
  message.innerHTML = msg;
}

function calculateChange(amtreturn) { //function of calculate change amount to be returned
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(
      amtreturn / availableNotes[i]
    );
    amtreturn = amtreturn % availableNotes[i];
    notes[i].innerHTML = numberofNotes;
  }
}