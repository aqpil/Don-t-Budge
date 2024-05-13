

const tick1 = document.querySelector('#tick__form__num2');
const cross1 = document.querySelector('#cross__form__num2');
const necessarySpendInput1 = document.querySelector('#necessarySpendings1');
const necessarySpendInput2 = document.querySelector('#necessarySpendings2');
const necessarySpendUL = document.querySelector('#necessarySpendingsUL');


const amountsSum = [];

tick1.addEventListener("click", function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let t = document.createTextNode(`${necessarySpendInput1.value} ${necessarySpendInput2.value}`);
    let cross1Dupe = cross1.cloneNode('✘');
    cross1Dupe.id = 'cross1Dupe';
    li.appendChild(t);
    li.appendChild(cross1Dupe);
    necessarySpendUL.appendChild(li);

    amountsSum.push(necessarySpendInput2.value);
    necessarySpendInput1.value = '';
    necessarySpendInput2.value = '';
});

// return/push the num value of the lis for further calculations


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
    cross2Dupe.id = 'cross2Dupe';
    li.appendChild(t);
    li.appendChild(cross2Dupe);
    wantToAffordUL.appendChild(li);

    amountsSum.push(wantToAffordInput2.value);
    wantToAffordInput1.value = '';
    wantToAffordInput2.value = '';
});




const calculateBtn = document.querySelector('#calculate__button');
const budget = document.querySelector('#budget');


calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const budgetValue = budget.value;
    let sum = 0;

    for (let i = 0; i < amountsSum.length; i++) {
        sum += (parseInt(amountsSum[i]));
    }
    console.log(budgetValue - sum);
});