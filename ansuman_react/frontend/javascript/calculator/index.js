

var a = document.getElementById("display");


function appendToDisplay(input) {
    a.value  += input;
}


function calculate() {
    try {
        a.value = eval(a.value);  
    } catch {
        a.value = "operand missing"; 
    }
    

}



function clearDisplay() {
    a.value = "";
}

// Event listener to handle keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key; 

    
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } 
    // Calculate result when "Enter" is pressed
    else if (key === "Enter") {
        calculate();
    } 
    
    else if (key === "Escape" || key === "Delete") {
        clearDisplay();
    } 
    
    else if (key === "Backspace") {
        a.value = a.value.slice(0, -1); 
    }
});
