//testing
function Calculate(inputText){
const expression=/\+|\-|\*|\//;
const numbers=inputText.split(expression);
const numberA=parseInt(numbers[0]);
const numberB=parseInt(numbers[1]);
const operation=inputText.match(expression);
if(Number.isNaN(numberB) || Number.isNaN(numberA) || operation === null){
    updateResult("operation not recognized");
    return;
}

const calculator=new Calculator();
calculator.add(numberA);
let result;

switch(operation[0]){
    case '+':
    result=calculator.add(numberB);
    break;
    case '-':
    result=calculator.sub(numberB);
    break;
    case '*':
    result=calculator.multiply(numberB);
    break;
    case '/':
    result=calculator.divide(numberB);
    break;
}
updateResult(result);
}
function updateResult(res){
    var result=document.getElementById("result");
    if(result){
    result.innerText =res;
    }
}
function showVersion(){
    const calculator= new Calculator();
    const versionId=document.getElementById('version');
    versionId.innerText=calculator.version;
}
