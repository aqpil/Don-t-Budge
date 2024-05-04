const budget = document.querySelector('#budget');
const tick1 = document.querySelector('#tick__form__num2');
const cross1 = document.querySelector('#cross__form__num2');
const tick2 = document.querySelector('#tick__form__num3');
const cross2 = document.querySelector('#cross__form__num3');
const calculateBtn = document.querySelector('#calculate__button');
const necessarySpendInput1 = document.querySelector('#necessarySpendings1');
const necessarySpendInput2 = document.querySelector('#necessarySpendings2');
const wantToAffordInput1 = document.querySelector('#wantToAfford1');
const wantToAffordInput2 = document.querySelector('#wantToAfford2');
const necessarySpendUL = document.querySelector('#necessarySpendingsUL');
const wantToAffordUL = document.querySelector('#wantToAffordUL');

tick1.addEventListener("click", function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let t = document.createTextNode(`${necessarySpendInput1.value} ${necessarySpendInput2.value}`);
    let cross1Dupe = cross1.cloneNode('✘');
    cross1Dupe.id = 'cross1Dupe';
    li.appendChild(t);
    li.appendChild(cross1Dupe);
    necessarySpendUL.appendChild(li);
});

tick2.addEventListener("click", function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let t = document.createTextNode(`${wantToAffordInput1.value} ${wantToAffordInput2.value}`);
    let cross2Dupe = cross2.cloneNode('✘');
    cross2Dupe.id = 'cross2Dupe';
    li.appendChild(t);
    li.appendChild(cross2Dupe);
    wantToAffordUL.appendChild(li);
});



cross1.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You clicked the 1st cross!");
});

tick2.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You clicked the 2nd tick!");
});

cross2.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You clicked the 2nd cross!");
});

calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You clicked calculate!");
});