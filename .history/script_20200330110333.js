let array = ["walcz", "przemyśl to jeszcze raz"];


const btnAdd = document.querySelector("button.add");
const btnOptions = document.querySelector("button.showOptions");
const btnReset = document.querySelector("button.reset");
const btnShowAdvice = document.querySelector("button.showAdvice");

const input = document.querySelector("input");

cont rand = Math.floor(Math.random() * array.length);

btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(input.value);
    array.push = input.value + ",";
    console.log(array);

})


btnOptions.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(array);
})


btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    array = [];
    console.log(array);
})

btnShowAdvice.addEventListener('click', (e) => {
    e.preventDefault();
    alert(array[rand]);
})