const totalBillInput = document.getElementById('total-bill');

const selectTipButtons = Array.from(document.querySelectorAll('.select-tip-buttons button'));
const customTipInput = document.getElementById('custom-tip');

const totalPeopleInput = document.getElementById('total-people');
const alertInputSpan = document.getElementById('alert-input');
const divWithAlert = document.querySelector('.div-with-alert');

const tipAmountPerPersonInput = document.getElementById('tip-amount-per-person');
const totalAmountPerPersonInput = document.getElementById('total-amount-per-person');

const resetBtn = document.getElementById('reset-btn');

// CALCULATION SHOULD BE DONE WITH INTEGERS => NUMBER * 100 SO NO DECIMAL NUMBERS

// AT THE END / 100 FOR RESULTS

let totalBill = 0;
let tip = 0;
let numberOfPeople = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

const removeBtnActive = () => {
  selectTipButtons.forEach(button => button.classList.remove('active'));
};

const selectTip = (btnValue) => {
  tip = btnValue;
  console.log('Select Tip: ' + tip);
};

const displayAlert = () => {
  totalPeopleInput.classList.add('alert');
  alertInputSpan.innerText = "Can't be zero";
};

totalBillInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter"){
    event.preventDefault();
    totalBill = Number(totalBillInput.value);
    console.log('Bill: ' + totalBill);
  }
});

selectTipButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeBtnActive();

    btn.classList.add('active');

    const buttonValue = Number(btn.value);
    selectTip(buttonValue);
  });
});

customTipInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){
    removeBtnActive();
    const customTipValue = Number(customTipInput.value);
    tip = customTipValue;
    console.log('Custom Tip: ' + tip);    
  }
});

totalPeopleInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter"){
    const totalPeople = Number(totalPeopleInput.value);

    if (totalPeople === 0) {
      displayAlert();
    } else {
      numberOfPeople = totalPeople;
      console.log('Number of People: ' + numberOfPeople)
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  tipAmountPerPersonInput.innerText = `$${tipPerPerson}`;
  totalAmountPerPersonInput.innerText = `$${totalPerPerson}`;

});