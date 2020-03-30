const array = ["walcz", "przemyśl to jeszcze raz"];


const btnAdd = document.querySelector("button.add");
const btnOptions = document.querySelector("button.showOptions");
const btnReset = document.querySelector("button.clean");
const input = document.querySelector("input");


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
    array = [""];
})