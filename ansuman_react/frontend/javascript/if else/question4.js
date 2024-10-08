//TODO: given totall bill  take any
// give a discount stat price if it satisfy the condition give discount 
// other wise no diiscount

let actualbill = 1000;

let offer = 1000;

let diiscountpercent = actualbill *0.10;

let newrice = actualbill- diiscountpercent;

if (actualbill >= offer){
    console.log("the discount price is " , newrice);

}

else{
    console.log ("no discount");
}
