/*task 5 */

let firstNumber = +prompt("enter 1 number")
let secondNumber = +prompt("enter 2 number")
let plus = firstNumber+ secondNumber;
let minus = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

 if  (firstNumber && secondNumber){
    let operation = prompt("opeation");
    if (operation==="plus"){
        alert(plus)
    }
        else if(operation === "minus"){
            alert(minus)
    
        }
        else if(operation === "multiply"){
            alert(mult)
     
        }
        else if(operation === "divide"){
            alert(div)
        }
     
 

}else{
    alert("one is not a number or operation is not correct. try again")
}


/*task one*/ 

let text = prompt("enter some text");
alert(text)

/*task two*/ 
let number1 = +prompt("enter first number");
let number2 = +prompt("enter second number");
let number3 = +prompt("enter third number");
alert (number1+number2+number3)

/*task 3 */
let namen = prompt("enter your name");
let age = prompt("enter your age");
if (age >= 18){
    alert(`welcome,  ${namen}` )
}else{
    alert(`sorry, ${namen} ,you are not allowed`)
}

/*task 4 */
let questionBlock = confirm(`do you want to enter block name?`)
if (questionBlock == true){
    let blockName = prompt(`write block name`)
    let questionElement = confirm(`do you want toenter element name?`)
        if(questionElement == true){
    let elementName = prompt(`enter element name`)
         }
         if(questionElement ==false){
    alert(blockName) 
   
        }

    let quesionModificator=confirm (`do you want to write modificator name?`)
    if (quesionModificator ==true){
        let modificatorName = prompt(`enter modificator name`)
        alert(blockName + elementName+modificatorName)
    }else{
        alert(blockName + elementName)
    }


 

}else {
    alert (`there is no block name`)
}

