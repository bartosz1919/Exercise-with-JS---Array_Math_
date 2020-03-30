const array = ["walcz", "przemyśl to jeszcze raz"];


const btnAdd = document.querySelector("button.add");
const btnOptions = document.querySelector("button.showOptions");
const input = document.querySelector("input");


btnAdd.addEventListener(`click`, (e) => {
        e.preventDefault();
        console.log(input.value);
        array.push = input.value + ",";
        console.log(array);

    }
    return array;)


btnOptions.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(array);
})