
let prevInput;
let currentInput = '';


function getButtonInput(button){

    let buttonText = button.textContent;

    if(buttonText !== 'C' && buttonText !== '=' && currentInput.length < 23){
    
        resize();

        if(buttonText === '%' && !Number.isInteger(Number(currentInput.charAt(currentInput.length-2)))){
            console.log("TEST");
            return;
        }


        currentInput += buttonText;

        let inputField = document.querySelector("#input-field");
        inputField.innerHTML = currentInput;
    }


    switch(buttonText){
        case 'C':
            currentInput = '';
            document.querySelector("#input-field").innerHTML = "0";
            document.querySelector("#previous-field").innerHTML = "&nbsp;"; 
            break;
        case '=':
            calculate();
            break;
    }


}

function calculate(){

}

function resize(button){

    if(currentInput.length > 15)
        document.getElementById("input-field").style.fontSize = "30px";

}