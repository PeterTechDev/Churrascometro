let adultInput = document.getElementById('adultsNumber');
let childrenInput = document.getElementById('childrenNumber')
let durationInput = document.getElementById('duration');

let resultDiv = document.getElementById('result');


function calculate() {
    console.log('Calculando...');

    let duration = durationInput.value

    const meatResult = meatPerPerson(duration) * adultInput.value + (meatPerPerson(duration) / 2 * childrenInput.value)
    const beerResult = beerPerPerson(duration) * adultInput.value;
    const drinksResult = drinksPerPerson(duration) * adultInput.value + (drinksPerPerson(duration) / 2 * childrenInput.value)

    // ${qdtTotalCarne/1000} Kg de Carne
    // ${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja
    // ${Math.ceil(qdtTotalBebidas/2000)} garrafas de Bebidas

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



document.querySelector('button').addEventListener('click', calculate)