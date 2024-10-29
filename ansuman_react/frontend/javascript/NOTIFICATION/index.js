let clickbutton = document.getElementById('notify');
let notificationpop = document.getElementById('notification');
let closebutton = document.getElementById('closetheBtn');

// TODO: for showing the notification 
function shownoti(){
    notificationpop.classList.add('show');

    // TODO: for hiding the pop up after some seconds we need 

    setTimeout(()=>{
notificationpop.classList.remove('show');
    },3000)
}

// TODO: event listeners for the evnt when we click the button the notification will appear 

clickbutton.addEventListener('click',shownoti);