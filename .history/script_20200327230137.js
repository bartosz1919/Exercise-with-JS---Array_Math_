const array = ["walcz", "przemyśl to jeszcze raz"];


const btnAdd = document.querySelector("button.add");
const input = document.querySelector("input").target.value;


btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(input);
})