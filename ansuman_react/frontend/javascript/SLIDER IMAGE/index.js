
const sliderImages = document.querySelectorAll('.pokemon-image');
let activeImageIndex = 0; 

//TODO: Function to display the next image in the slider
function showNextImage() {
    // TODO:Hide the currently active images of the slide
    sliderImages[activeImageIndex].classList.remove('active');
    
    //TODO: Move to the next image, looping back to the start if we reach the end
    activeImageIndex = (activeImageIndex + 1) % sliderImages.length;

    //TODO: FOR Showing  the new active image of ouur slide 
    sliderImages[activeImageIndex].classList.add('active');
}


setInterval(showNextImage, 1000);
