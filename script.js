const totalBillInput = document.getElementById('total-bill');

const selectTipButtons = Array.from(document.querySelectorAll('.select-tip-buttons button'));
const customTipInput = document.getElementById('custom-tip');

const totalPeopleInput = document.getElementById('total-people');
const alertInputSpan = document.getElementById('alert-input');
const divWithAlert = document.querySelector('.div-with-alert');

const tipAmountPerPerson = document.getElementById('tip-amount-per-person');
const totalAmountPerPerson = document.getElementById('total-amount-per-person');

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
};

const displayAlert = (str) => {
  totalPeopleInput.classList.add('alert');
  alertInputSpan.innerText = str;
};

const removeAlert = () => {
  totalPeopleInput.classList.remove('alert');
  alertInputSpan.innerText = '';
}

const calculate = () => {
  console.log('Bill: ' + totalBill/100);
  console.log('Tip: ' + tip/100);
  console.log('Number of People: ' + numberOfPeople);

  const tipAmount = (totalBill * (tip / 100));
  const totalAmount = totalBill + tipAmount;

  tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);
  totalPerPerson = (totalAmount / numberOfPeople).toFixed(2);

  if (totalBill !== 0 && tip !== 0 && numberOfPeople !== 0){
    tipAmountPerPerson.innerText = `$${tipPerPerson}`;
    totalAmountPerPerson.innerText = `$${totalPerPerson}`;
    resetBtn.disabled = false;
  } else {
    tipAmountPerPerson.innerText = `$${0}`;
    totalAmountPerPerson.innerText = `$${0}`;
  }
};

totalBillInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter"){
    event.preventDefault();
    totalBill = parseFloat(totalBillInput.value);
    totalBillInput.blur();
    calculate();
  }
});

selectTipButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeBtnActive();

    btn.classList.add('active');

    const buttonValue = parseFloat(btn.value);
    selectTip(buttonValue);
    calculate();
  });
});

customTipInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){
    removeBtnActive();
    const customTipValue = parseFloat(customTipInput.value);
    tip = customTipValue;
    customTipInput.blur();    
    calculate();
  }
});

totalPeopleInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter"){
    if (!Number.isInteger(Number(totalPeopleInput.value))) {
      displayAlert('Input not valid');
    }
    else if (Number(totalPeopleInput.value) === 0) {
      displayAlert("Can't be zero");
    } else {
      numberOfPeople = Number(totalPeopleInput.value);
      removeAlert();
    }
    totalPeopleInput.blur();
    calculate();
  }
});

resetBtn.addEventListener('click', () => {
  totalBillInput.value = '';
  removeBtnActive();
  totalPeopleInput.value = '';
  tipAmountPerPerson.innerText = `$${0}`;
  totalAmountPerPerson.innerText = `$${0}`;
});

document.addEventListener('DOMContentLoaded', () => {
  tipAmountPerPerson.innerText = `$${tipPerPerson}`;
  totalAmountPerPerson.innerText = `$${totalPerPerson}`;

});