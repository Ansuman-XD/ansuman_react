let countdownDate; 

//TODO: Initialize the countdown based on user input
const initializeCountdown = () => {
    const dateInput = document.getElementById('countdown-date').value;
    const timeInput = document.getElementById('countdown-time').value;
    
    // Combine the date and time to create a valid Date object
    countdownDate = new Date(`${dateInput} ${timeInput}`).getTime();
    updateCountdownText();  
};

// TODO:Countdown logic
const countdown = () => {
    const now = new Date().getTime();
    const gap = countdownDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (gap <= 0) {
        // Countdown finished
        document.getElementById('countdown').style.display = 'none'; // Hide the countdown
        document.getElementById('hooray-message').style.display = 'block'; // Show "Hooray!" message
    } else {
        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = days > 0 ? days : 0;
        document.getElementById('hours').innerText = hours > 0 ? hours : 0;
        document.getElementById('minutes').innerText = minutes > 0 ? minutes : 0;
        document.getElementById('seconds').innerText = seconds > 0 ? seconds : 0;
    }
};

//TODO: Function to update the countdown box color
const updateColor = () => {
    const selectedColor = document.getElementById('color').value;
    document.querySelector('.countdown-display').style.backgroundColor = selectedColor;
    const timeBoxes = document.querySelectorAll('.time');
    timeBoxes.forEach(box => {
        box.style.color = selectedColor;
    });
};

// TODO:Function to update the countdown title dynamically
const updateTitle = () => {
    const newTitle = document.getElementById('title').value;
    document.getElementById('coming-soon-title').innerText = newTitle;
};

// TODO:Function to update the displayed date text below the countdown
const updateCountdownText = () => {
    const dateInput = document.getElementById('countdown-date').value;
    const timeInput = document.getElementById('countdown-time').value;
    const formattedDate = new Date(`${dateInput} ${timeInput}`).toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    document.getElementById('end-date').innerText = formattedDate;
};

// TODO:Event listeners for dynamic updates
document.getElementById('color').addEventListener('input', updateColor);
document.getElementById('title').addEventListener('input', updateTitle);
document.getElementById('countdown-date').addEventListener('input', initializeCountdown);
document.getElementById('countdown-time').addEventListener('input', initializeCountdown);

// TODO:Initialize countdown on page load
initializeCountdown();
setInterval(countdown, 1000);
