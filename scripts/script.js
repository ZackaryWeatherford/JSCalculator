
const currentDisplay = document.getElementById('input-field');
const prevDisplay = document.getElementById('previous-field');

let currentCalculation = '0';
let prevNum = ' ';

const operators = ['+', '-', '*', '÷'];

//   _ = negative number


function insert(newElement){

    updateCurrentCalculation(newElement);
    
    updateDisplay();
}

function updateCurrentCalculation(newElement){

    //Numbers
    if(!isNaN(newElement)){
        //Replace 0 placeholder or just concat new number
        if(currentCalculation === '0' || currentCalculation === '_0')
            currentCalculation = newElement;
        else
            currentCalculation += newElement;
        return;
    }

    //Operators
    if(operators.includes(newElement)){
        if(!isNaN(currentCalculation[currentCalculation.length-1]))
            currentCalculation += newElement;
        return;
    }

    //Clear
    if(newElement === 'C'){
        currentCalculation = '0';
        return;
    }

    //Switch current numbers sign
    if(newElement === '+/-'){
        switchSigns();
        return;
    }

    //Make number into a decimal number
    if (newElement === '.'){
        addDecimal();
        return;
    }

    //
    if(newElement === '%'){
        makePercent(getNumber(currentCalculation.length-1));
    }

}


function switchSigns(){

    // If current calculation is just one number then add negative to beggining
    if(currentCalculation.length == 1){
        currentCalculation = '_' + currentCalculation;
        return;
    }

    let i = currentCalculation.length-1;

    while(!isNaN(currentCalculation[i]) || currentCalculation[i] === '.'){
        if(i <= 0)
            break;
        i--;
    }

    if(currentCalculation[i] === '_'){
        currentCalculation = currentCalculation.slice(0,i) + currentCalculation.slice(i+1);
        return;
    }

    if(i !== 0)
        i++;
     
    currentCalculation = currentCalculation.slice(0,i) + '_' + currentCalculation.slice(i);
}

function addDecimal(){
    let i = currentCalculation.length - 1;
    while(!isNaN(currentCalculation[i])){
        i--;
    }
    if(currentCalculation[i] !== '.')
        currentCalculation += '.';
    return;
}


function makePercent(number){
    let numStart = currentCalculation.length - number.length;
    number = number / 100;

    currentCalculation = currentCalculation.slice(0, )
}


function updateDisplay(){

    let formattedCalculation;

    //Format the calculation for user view

    for(let i = 0; i < currentCalculation.length; i++){

    }

    currentDisplay.textContent = currentCalculation;
    prevDisplay.innerHTML = prevNum;

}

function getNumber(charIndex){

    if(isNaN(currentCalculation[charIndex]) && currentCalculation[charIndex] !== '.' && currentCalculation[charIndex] !== '_'){
        return;
    }

    let number = currentCalculation[charIndex];
    let i = charIndex - 1;

    //Grab values from left
    while(!isNaN(currentCalculation[i]) || currentCalculation[i] === '.' || currentCalculation[i] === '_'){
        number = currentCalculation[i] + number;

        if(i <= 0)
            break;
        i--;
    }

    i = charIndex + 1;

    //Grab values from right
    while(!isNaN(currentCalculation[i]) || currentCalculation[i] === '.' || currentCalculation[i] === '_'){
    number = number + currentCalculation[i];

    if(i <= 0)
        break;
    i++;
    }

    //Convert _ to -
    if(number[0] == '_'){
        number = '-' + number.slice(1);
    }

    return Number(number);
}