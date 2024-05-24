

const tick1 = document.querySelector('#tick__form__num2');
// const cross1 = document.querySelector('#cross__form__num2');
const necessarySpendInput1 = document.querySelector('#necessarySpendings1');
const necessarySpendInput2 = document.querySelector('#necessarySpendings2');
const necessarySpendUL = document.querySelector('#necessarySpendingsUL');


const amountsSum = [];
// let cross1Dupe;

tick1.addEventListener("click", function (event) {
    event.preventDefault();
    let li = document.createElement('li');

    let t = document.createTextNode(`${necessarySpendInput1.value} ${necessarySpendInput2.value}`);
    li.appendChild(t);

    let cross1Dupe = document.createElement('button');
    cross1Dupe.innerText = '✘';
    cross1Dupe.addEventListener("click", function () {
        li.remove();
    })

    li.appendChild(cross1Dupe);
    necessarySpendUL.appendChild(li);

    amountsSum.push(necessarySpendInput2.value);
    necessarySpendInput1.value = '';
    necessarySpendInput2.value = '';
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

    amountsSum.push(wantToAffordInput2.value);
    wantToAffordInput1.value = '';
    wantToAffordInput2.value = '';
});




const untilDateInput = document.querySelector('#until_date');
let totalDays = 0;

function calculateDaysBetween(now, untilDateValue) {
    const untilDate = new Date(untilDateValue);
    let timeDiff = Math.abs(now.getTime() - untilDate.getTime());
    return Math.ceil(timeDiff / (24 * 60 * 60 * 1000));  // Using Math.ceil to round up to the nearest whole number
}

// Adding an event listener to the date input to calculate days when a date is selected
untilDateInput.addEventListener('change', function () {
    let now = new Date();
    let daysBetween = calculateDaysBetween(now, this.value);
    totalDays = daysBetween;
    // console.log(`Days between now and the selected date: ${daysBetween}`);
});




const calculateBtn = document.querySelector('#calculate__button');
const budget = document.querySelector('#budget');
const dailyBudget = document.querySelector('#dailyBudget');


calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const budgetValue = budget.value;
    let sum = 0;

    for (let i = 0; i < amountsSum.length; i++) {
        sum += (parseInt(amountsSum[i]));
    }
    dailyBudget.textContent = (((budgetValue - sum) / totalDays).toFixed(2));
});