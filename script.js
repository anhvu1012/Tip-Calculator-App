const totalBillInput = document.getElementById('total-bill');

const selectTipButtons = Array.from(document.querySelectorAll('.select-tip-buttons button'));
const tip5Input = document.getElementById('5-tip');
const tip10Input = document.getElementById('10-tip');
const tip15Input = document.getElementById('15-tip');
const tip25Input = document.getElementById('25-tip');
const tip50Input = document.getElementById('50-tip');
const tipCustomInput = document.getElementById('custom-tip');

const totalPeopleInput = document.getElementById('total-people');

const tipAmountPerPersonInput = document.getElementById('tip-amount-per-person');
const totalAmountPerPersonInput = document.getElementById('total-amount-per-person');

const resetBtn = document.getElementById('reset-btn');

let totalBill = 0;
let tip = 0;
let numberOfPeople = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

totalBillInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter"){
    event.preventDefault();
    totalBill = totalBillInput.value;
    console.log(totalBill);
  }
});

selectTipButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.value);
    btn.classList.add('active');
  })
})