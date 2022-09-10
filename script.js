function createCalculator(){
    const gridContainer = document.querySelector('.grid-container');

    // //Create calulator display
    // let display = document.createElement('div');
    // display.className = 'display';
    // display.innerText = 'OUTPUT';
    // gridContainer.appendChild(display);

    //Loop to create buttons
    for (let i=1; i <= 20; i++){
        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        let button = document.createElement('button');
        button.className ='button'
        button.id = `button${i}`;
        button.innerText = button.id;
        gridContainer.appendChild(buttonContainer);
        buttonContainer.appendChild(button);
    }

    //Set grid css properties
    gridContainer.style.cssText += 'grid-template-columns: repeat(5, 1fr);';

    //Brute force ID assign
    const buttonLabels = ['7','8','9','/','DEL','4','5','6','X','CLEAR','1','2','3','-','?','0','.','?','+','='];
    const integers = ['0','1','2','3','4','5','6','7','8','9'];

    let buttons = Array.from(document.querySelectorAll('button'));
    for (let i=0; i < buttons.length; i++){
        buttons[i].innerText = buttonLabels[i];
        if (integers.includes(buttons[i].innerText)){
            buttons[i].className = 'numberButton'
        }
        else {buttons[i].className = 'operatorButton';}
   }
}
//Helper to handle single operation
function operate(num1, operator, num2){
    if (operator === '/') {
        if(num2 === 0) return 'CANNOT DIVIDE BY ZERO';
        else return num1/num2;
    }
    else if (operator === 'X') {return num1*num2;}
    else if (operator === '-') {return num1-num2;}
    else if (operator === '+') {return num1+num2}
    else return 0;
}
//Handles string input from calculator display, returns result
function operateOnArray(input){
    let numbers = input;
    let operators = [];
    let result = 0;
  

    for (i=0; i<input.length; i++){
        if(input[i] === '/') operators.push('/');
        if(input[i] === 'X') operators.push('X');
        if(input[i] === '-') operators.push('-');
        if(input[i] === '+') operators.push('+');
    }
    console.log(operators)

    //Remove operators from numbers array using regex
    console.log(`before` + numbers)
    numbers = numbers.split(/[\+\-\/X]+/);
    console.log('after' + numbers);

    //Convert numbers array elements to number type
    numbers = numbers.map(number => Number(number));
    console.log(numbers);

    //Handle single operation
    if (numbers.length == 2){
        result = operate(numbers[0], operators[0],numbers[1]);
        console.log(result);
        return result;
    }
    //Handle multiple operations
    else {
        let j=0;
        for (let i=0; i<operators.length; i++){
            if(i == 0){
                result = operate(numbers[j], operators[i], numbers[j+1]);
                j += 2;
                console.log(`Result[${i}]: ${result}`);
            }
            else{
                result = operate(result, operators[i], numbers[j])
                j++;
                console.log(`Result[${i}]: ${result}`)
        }}
        return result;
    }
}   

function setEventListeners(){
    let buttons = Array.from(document.querySelectorAll('button'));
    let display = document.querySelector('.display');
    let resultWindow = document.querySelector('.result');
    
    buttons.forEach(button => {
        if (button.innerText != 'DEL' && button.innerText != 'CLEAR' && button.innerText != '='){  
            button.addEventListener('click', () => {
                display.innerText += button.innerText;
            });
        }
        else if(button.innerText === 'CLEAR'){
            button.addEventListener('click', () => {
                display.innerText = '';
                resultWindow.innerText = '';
            });
        }
        else if(button.innerText === 'DEL'){
            button.addEventListener('click', () => {
                display.innerText = display.innerText.slice(0,-1);
            });
        }
        else if (button.innerText === '='){
            button.addEventListener('click', () =>{
                console.log(`Inner Text: ${display.innerText}`);
                let result = operateOnArray(display.innerText);
                console.log(`Result: ${result}`);
                resultWindow.innerText = result;
            });
        }
    });
}

//Initialze page
createCalculator();
setEventListeners();