var theButton = document.getElementById("button1"); //defining  id button1
var total = document.getElementById("theTotal"); //defining  id total

theButton.addEventListener("click", sumPress); //once button one is pressed calling sumPress function
var sum = 0; // setting sum at 0 for counter

function sumPress()  //creating function sumPress
{
    total.innerHTML += 1; //adding one to the total every cycle
    sum += 1; //adding one to the sum every cycle
    total.innerHTML = sum; //making sum and total =
     if (sum=== 10){
         document.getElementById('button2').removeAttribute("disabled");
     }

document.getElementById('button2').setAttribute("disabled", "disabled");


var theButton2 = document.getElementById("button2");
var total2 = document.getElementById("theTotal2"); ////second button that does the same thing as the first

theButton2.addEventListener("click", sumPress2);
var sum2 = 0;


function sumPress2()
{
    total2.innerHTML += 1;
    sum2 += 1;
    total2.innerHTML = sum2;
}


var theButton3 = document.getElementById("button3");
var total3 = document.getElementById("theTotal3"); // creating a reset button

theButton3.addEventListener("click" ,sumPress3);// that when clicked sets value of the first two buttons back at 0
var sum3 = 0;
function sumPress3()
<<<<<<< HEAD
    {
        a = 0;
        document.getElementById('theTotal').innerHTML = a;
        document.getElementById('theTotal2').innerHTML = a;
        document.getElementById("Reset").innerHTML = a;

        }



=======
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
>>>>>>> 6dd63d7584dec98603e1fb6aa540ad1411a8914f
