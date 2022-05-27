// Задание 1
console.log("Задание 1")
const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}

const getRate = forex => {
    return etherium[forex];
}

const getValues = obj => {
    return Object.values(obj).map(x => x.toUpperCase());
}

console.log(getValues({lang: "JavaScript", course: "third"}));

const address = {
    street: "Lenina",
    building: 1,
    flat: 40
}

const getInfo = (key) => {
    return {key}
}

Object.keys(address).forEach(element => {
    console.log(getInfo(element));
});

const joinArrays = (firstObj, secondObj) => {
    return {...firstObj, ...secondObj}
}

console.log(joinArrays(etherium, address));