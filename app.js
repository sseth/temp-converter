
const tempF = document.querySelector('#fahrenheit > input');
const tempC = document.querySelector('#celsius > input');
const tempK = document.querySelector('#kelvin > input');


function round(n) {
    return Math.round(n * 100) / 100;
}

const convertF = () => {
    let f = parseFloat(tempF.value);
    let c = round((5 / 9) * (f - 32));
    tempC.value = c;
    tempK.value = round(c + 273.15);
};

const convertC = () => {
    let c = parseFloat(tempC.value);
    tempF.value = round((9 / 5) * c + 32);
    tempK.value = round(c + 273.15);
};

const convertK = () => {
    let k = parseFloat(tempK.value);
    let c = round(k - 273.15);
    tempC.value = c;
    tempF.value = round((9 / 5) * c + 32);
};

function main() {
    tempF.addEventListener('input', convertF);
    tempC.addEventListener('input', convertC);
    tempK.addEventListener('input', convertK);
}

main();