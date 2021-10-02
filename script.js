let adultInput = document.getElementById('adultsNumber');
let childrenInput = document.getElementById('childrenNumber')
let durationInput = document.getElementById('duration');

let resultDiv = document.querySelector('.result');


function calculate() {
    console.log('Calculando...');

    let duration = durationInput.value

    const meatResult = meatPerPerson(duration) * adultInput.value + (meatPerPerson(duration) / 2 * childrenInput.value)
    const beerResult = beerPerPerson(duration) * adultInput.value;
    const drinksResult = drinksPerPerson(duration) * adultInput.value + (drinksPerPerson(duration) / 2 * childrenInput.value)

    resultDiv.innerHTML = `<h3 class="result-info">Você vai precisar de:</h3>`
    resultDiv.innerHTML +=
        `
        <div class="result-item">
        <p>${meatResult / 1000} Kg de Carne</p>
        </div>
    `
    resultDiv.innerHTML += `
        <div class="result-item">
            <p>${Math.ceil(beerResult / 355)} latas de Cerveja</p>
        </div>
    `
    resultDiv.innerHTML += `
        <div class="result-item">
        <p>${Math.ceil(drinksResult / 1000)} litros de Bebidas</p>
        </div>
    `
}

const meatPerPerson = (duration) => {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

const beerPerPerson = (duration) => {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

const drinksPerPerson = (duration) => {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault()
    calculate()
})