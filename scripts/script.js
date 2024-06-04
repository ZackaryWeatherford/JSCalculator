
//Inputs
let prevInput;
let currentInput = '';

//DOM Vars
const inputField = document.querySelector("#input-field");
const buttons = document.querySelector("#buttons-view");

//Add event listeners to buttons
const buttonsEvent = () => {

    buttons.addEventListener("click", (event) => {
        updateInput(event.target.textContent);
    });

}

buttonsEvent();

//Logic for button input
const updateInput = (buttonText) => {

    //Add number buttons
    if(!Number.isNaN(Number(buttonText))){
        currentInput += buttonText;
    }

    //Operators
    if(buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '&#247;'){
        if(currentInput.length === 0)
            return;

        //Get last char inputed
        const prevChar = currentInput.charAt(currentInput.length-1);

        //Check if previous input was a parenthesis or a number to allow operator
        if(prevChar === ')' || !Number.isNaN(Number(prevChar))){
            currentInput += buttonText;
        }
    }

    //Update inputField and resize text
    inputField.innerHTML = currentInput;
    resize();

    //Deal with special chars
    switch(buttonText){
        case 'C':
            currentInput = '';
            document.querySelector("#input-field").innerHTML = "0";
            document.querySelector("#previous-field").innerHTML = "&nbsp;"; 
            break;
        case '=':
            calculateAnswer();
            break;
    }


}


//Parse the currentInput and recursively solve anything in parenthesis
function calculateAnswer(){

}

//Resize text in input field when overflow is about to happen
function resize(button){

    if(currentInput.length > 15)
        document.getElementById("input-field").style.fontSize = "30px";
    else
        document.getElementById("input-field").style.fontSize = "40px";
}

//Apply text spacing between numbers and operators
const applyTextSpacing = () => {

}