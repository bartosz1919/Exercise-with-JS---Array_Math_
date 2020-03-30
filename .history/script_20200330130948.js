let array = ["walcz", "przemyśl to jeszcze raz"];


const btnAdd = document.querySelector("button.add");
const btnOptions = document.querySelector("button.showOptions");
const btnReset = document.querySelector("button.reset");
const btnShowAdvice = document.querySelector(".showAdvice");

const input = document.querySelector("input");



btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(input.value);
    array.push(input.value);
    input.value = "";
    // console.log(array);

})


btnOptions.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(array);
})


btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    array.length = 0;

})

btnShowAdvice.addEventListener('click', (e) => {
    e.preventDefault();
    const advice = Math.floor(Math.random() * array.length);
    alert(array[advice]);
})