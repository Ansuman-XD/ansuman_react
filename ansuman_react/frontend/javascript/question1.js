// TODO:Question-1:
// Write a JavaScript program that calculates the total bill for a restaurant order. The program should do the following:

// Define two variables foodPrice and drinkPrice and assign them any values of your choice.
// Calculate the total bill by adding foodPrice and drinkPrice.
// Add a 10% tip based on the total bill.
// Display the final amount (total bill + tip) using console.log.
let foodPrice = 100;
let drinkPrice = 100;
let total = foodPrice + drinkPrice ;
let tip = total * (10/100);
console.log("the final ammount is ="  , total +tip  );