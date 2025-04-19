
//odd or even 
function changeColor(){
    let userInput = prompt("Enter a number:");
    let number = parseInt(userInput); // Convert the input to an integer
    if (num %2 == 0){
            console.log("number is even");
    } else {
        console.log("number is odd");  
    }  
}
changeColor();

//hvdhdvdf
var  button= document.querySelector('button');
var box= document.getElementById('box');

//kjdife
function changeColor() {
    let box = document.getElementById('box');
    box.style.backgroundColor = colors[index];
    index=(index+1)% colors.length
  }
  
