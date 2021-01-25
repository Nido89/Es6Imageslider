const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
// Interval time in milliseconds
const intervalTime = 5000;
let slideInterval;

// Next Slide Function
const nextSlide = () => {
    //getting the current class
    const current = document.querySelector('.current');
    // Removing the current class from html
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() =>current.classList.remove('current'));
}
// Previous Slide Function
const prevSlide = () => {
    //getting the current class
    const current = document.querySelector('.current');
    // Removing the current class from html
    current.classList.remove('current');
    // Check for previous slide
    if(current.previousElementSibling){
        // Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }else{
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() =>current.classList.remove('current'));
}

// Next Button events
next.addEventListener('click', e=>{
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
})

// Previous Button events
prev.addEventListener('click', e=>{
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
})

// Setting up the Autoslide show

if(auto){
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide,intervalTime);
}