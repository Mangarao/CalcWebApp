
let screen = document.getElementById("answer");
let buttons = document.querySelectorAll("button");
let count = 0;
let buttonText;

//When input is given from buttons of app
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerHTML;
        if (buttonText == 'X') {
            buttonText = "*";
        } else if (buttonText == 'C') {
            screen.value = "";
            return;
        } else if (buttonText == '=') {
          result();
            buttonText = '';
            return;

        }
        alert("button text"+buttonText)
        alert(" screen.value"+ screen.value)

        screen.value += buttonText;
      
        
    })

}
/**
 * 
 * Actual logic to evaluate the given input and show result on Screen
 */
function result() {

    try {
            screen.value = eval(screen.value);

    } catch (error) {
        alert("Please enter valid input");
        screen.value='';
        buttonText='';
        keyText='';
        return;

    }
  
   
}

//code to capture input from Keyboard

document.addEventListener("keydown", (e) => {
     keyText = e.key;
    if (keyText == 'C' || keyText == 'c') {
        screen.value = '';
    } else if (keyText == '=' || keyText=='Enter') {
        result();
       
    } else if (keyText <= 9 || keyText == '*'
        || keyText == '+' || keyText == '-' || keyText == '/' || keyText == '%' || keyText == '.' || keyText== "/" ||
            keyText == '(' || keyText == ')'
    ){
        
    screen.value += keyText;
}
});



window.onerror = function () {
    alert("Something went wrong! Please try again");
    screen.value = '';
}




