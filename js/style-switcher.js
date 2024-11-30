 /*toggle style switcher */

 const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
 styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
 })

 //Hide style switcher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').remove('open');
    }
})

/* Toggle Style Switcher */

const alternateStyles = document.querySelectorAll('.alternative-style'); 

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute('disabled'); // Enable the selected style
        } else {
            style.setAttribute('disabled', 'true'); // Disable others
        }
    });
}


/** Light and Dark mode */

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }else {
        document.querySelector('i').classList.add('fa-moon');
    }
})