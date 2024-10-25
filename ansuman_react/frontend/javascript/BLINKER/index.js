const a = document.getElementById('blink');
const blinkinputbyuser = document.getElementById('blink-interval')

let blinkinterval = 100;
let blinkid ;

// TODO: for clearing the ongoing blinking of the text 

function startblinking(interval){
    clearInterval(blinkid);
// TODO: for blinking the text we took the set interval and psse a arrow function and made a loop inside i

blinkid= setInterval(()=>{

if(a.style.visibility === "hidden"){
    a.style.visibility = "visible";
}
else{
    a.style.visibility ="hidden";
}

},interval)


}


// TODO: event listners for users to controll the bloinking manuallally
blinkinputbyuser.addEventListener("input",(event)=>{
    blinkinterval = parseInt(event.target.value) || 100;
startblinking(blinkinterval);
});

startBlinking(blinkinterval);