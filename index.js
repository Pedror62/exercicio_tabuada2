const multiplicationForm = document.querySelector('#multitiplo_form');
const numberInpult = document.querySelector('#number');
const multiplicationInpult = document.querySelector('#multiplicator');

const multiplicadorTabel = document.querySelector(
".multiciplication-table");

const apreNumber = document.querySelector('#multiplacton-title Span')
apreNumber.innerHTML = ""

//funçao

const creatTable = (number, multiplicatorNumber) =>{
    multiplicadorTabel.innerHTML = "";

    for( i = 1; i <= multiplicatorNumber; i ++){
        const result = number * i
    
        const template = ` <div id="row">
        <div class="opartion"> ${number} x ${i} = </div>
        <div class="result">${result}</div>`
        console.log(result);

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template , "text/html");

        const row = htmlTemplate.querySelector('#row');

        multiplicadorTabel.appendChild(row);

         
    }
    apreNumber.innertext = number;
};

//eventos

multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplicationNumber = +numberInpult.value;

    const multiplicatorNumber = +multiplicationInpult.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    creatTable(multiplicationNumber, multiplicatorNumber);
});