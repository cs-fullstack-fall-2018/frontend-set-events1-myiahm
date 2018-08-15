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