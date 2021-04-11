function addFunction()
{
   var number1 = document.getElementById("number1").value;
   var number2 = document.getElementById("number2").value;

   var answer = parseFloat(number1) + parseFloat(number2);

document.getElementById("answer").value = answer;

}

function subFunction()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
 
    var answer = parseFloat(number1) - parseFloat(number2);
 
document.getElementById("answer").value = answer;
}


function multFunction()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
 
    var answer = parseFloat(number1) * parseFloat(number2);
 
document.getElementById("answer").value = answer;
}

function divFunction()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
 
    var answer = parseFloat(number1) / parseFloat(number2);
 
document.getElementById("answer").value = answer;
}