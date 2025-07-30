
  const addBtn = document.getElementById("t");
  const subtractBtn = document.getElementById("c");
  const divideBtn = document.getElementById("b");
  const multiplyBtn = document.getElementById("v");


addBtn.onclick = function calculate(){


    let num1 = parseFloat(document.getElementById("num1").value)
 
    let num2 = parseFloat(document.getElementById("num2").value)
 
     let sum = num1+num2;
     

     result = document.getElementById("resultOfCalculation").value=sum

     
 }


 subtractBtn.onclick = function(){

    let num1 = parseFloat(document.getElementById("num1").value)
 
    let num2 = parseFloat(document.getElementById("num2").value)
 
     let sum = num1-num2;
     

     result = document.getElementById("resultOfCalculation").value=sum

 }


 divideBtn.onclick = function(){

    let num1 = parseFloat(document.getElementById("num1").value)
 
    let num2 = parseFloat(document.getElementById("num2").value)
 
     let sum = num1/num2;
     

     result = document.getElementById("resultOfCalculation").value=sum

 }

 multiplyBtn.onclick = function(){

    let num1 = parseFloat(document.getElementById("num1").value)
 
    let num2 = parseFloat(document.getElementById("num2").value)
 
     let sum = num1*num2;
     

     result = document.getElementById("resultOfCalculation").value=sum
 }