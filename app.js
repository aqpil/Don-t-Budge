// MAKE THE PAGE ADAPTABLE

const tick1 = document.querySelector('#tick__form__num2');
const necessarySpendInput1 = document.querySelector('#necessarySpendings1');
const necessarySpendInput2 = document.querySelector('#necessarySpendings2');
const necessarySpendUL = document.querySelector('#necessarySpendingsUL');

const expenses = [];
function expense(name, amount) {
    this.expenseId = `expense${expemseId++}`;
    this.name = name;
    this.amount = amount;
}

let expemseId = 0;

tick1.addEventListener("click", function (event) {
    event.preventDefault();
    if (necessarySpendInput1.value !== '' && necessarySpendInput2.value !== '') {

        let card = document.createElement('li');
        const expenseValue = new expense(necessarySpendInput1.value, necessarySpendInput2.value);
        card.id = expenseValue.expenseId;

        let t = document.createTextNode(`${necessarySpendInput1.value} ${necessarySpendInput2.value}`);
        card.appendChild(t);

        let cross1 = document.createElement('button');
        cross1.innerText = '✘';

        cross1.addEventListener("click", function (event2) {
            event2.preventDefault();

            card.remove();

            expenses = [0, 1]

            for (let i = 0; i < expenses.length; i++) {
                if (expenses[i].expenseId === card.id) {
                    expenses.splice(i, 1);
                    break;
                }
            }

        })

        card.appendChild(cross1);
        necessarySpendUL.appendChild(card);

        expenses.push(expenseValue);
        necessarySpendInput1.value = '';
        necessarySpendInput2.value = '';
    }
});




const tick2 = document.querySelector('#tick__form__num3');
const cross2 = document.querySelector('#cross__form__num3');
const wantToAffordInput1 = document.querySelector('#wantToAfford1');
const wantToAffordInput2 = document.querySelector('#wantToAfford2');
const wantToAffordUL = document.querySelector('#wantToAffordUL');


tick2.addEventListener("click", function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let t = document.createTextNode(`${wantToAffordInput1.value} ${wantToAffordInput2.value}`);
    let cross2Dupe = cross2.cloneNode('✘');
    cross2Dupe.class = 'cross2Dupe';
    li.appendChild(t);
    li.appendChild(cross2Dupe);
    wantToAffordUL.appendChild(li);

    expenses.push(wantToAffordInput2.value);
    wantToAffordInput1.value = '';
    wantToAffordInput2.value = '';
});




const untilDateInput = document.querySelector('#until_date');
let totalDays = 0;

function calculateDaysBetween(now, untilDateValue) {
    const untilDate = new Date(untilDateValue);
    let timeDiff = Math.abs(now.getTime() - untilDate.getTime());
    return Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
}

untilDateInput.addEventListener('change', function () {
    let now = new Date();
    let daysBetween = calculateDaysBetween(now, this.value);
    totalDays = daysBetween;
});




const calculateBtn = document.querySelector('#calculate__button');
const budget = document.querySelector('#budget');
const dailyBudget = document.querySelector('#dailyBudget');


calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const budgetValue = budget.value;
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        sum += (parseInt(expenses[i].amount));
    }
    dailyBudget.textContent = (((budgetValue - sum) / totalDays).toFixed(2));
    console.log(expenses);
});














// THIS DOESNT WORK! KINDLY REDO :)))
// let idToRemove = parseInt(li.getAttribute('data-id')); // Get the unique ID from 'li'
// let removed = expenses.splice(expenses.findIndex(item => item.id === idToRemove), 1); // Remove the corresponding element from the array
// console.log(removed)