var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");

theButton.addEventListener("click", sumPress);
var sum = 0;

function sumPress() {
    total.innerHTML += 1;
    sum += 1;
    total.innerHTML = sum;
}

var theButton2 = document.getElementById("button2");
var total2 = document.getElementById("theTotal2");

theButton2.addEventListener("click", sumPress2);
var sum2 = 0;


function sumPress2() {
    total2.innerHTML += 1;
    sum2 += 1;
    total2.innerHTML = sum2;
}


var theButton3 = document.getElementById("button3");
var total3 = document.getElementById("theTotal3");

theButton3.addEventListener("click" ,sumPress3);
var sum3 = 0;
function sumPress3()
{
    total3.innerHTML = 0;
     sum3 = 0;
     total3.innerHTML= sum3 + sum2 +sum3
}


/*

Step 1:
Complete

Step 2:
Almost. You got the second button working, but the reset isn't working. Look at your code agian to see what you need each total to do when you hit reset. I don't think you need to add anything in it.

From Kenn
*/