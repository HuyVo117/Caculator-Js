const display = document.getElementById("display");

function appendToDisplay(input) {
display.value += input;

}
function clearDisplay() {
    display.value = "";
}
function caculator() {

   try {
    display.value = eval(display.value);
   } catch (error) {
    display.value = "Error";
   }

    
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
function saveCalculation() {
    let calculation = document.getElementById('calculation').value;
    localStorage.setItem('savedCalculation', calculation); 
    document.getElementById('savedCalculation').innerText = 'Saved Calculation: ' + calculation;
}


window.onload = function() {
    let savedCalc = localStorage.getItem('savedCalculation');
    if (savedCalc) {
        document.getElementById('savedCalculation').innerText = 'Saved Calculation: ' + savedCalc;
    }
}