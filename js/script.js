/** Typing animation */
let typed = new Typed('.typing', {
    strings: ['', 'Software Developer'], // Fixed typo: 'string' -> 'strings'
    typeSpeed: 100, // Typing speed
    backSpeed: 60, // Backspace speed
    loop: true // Loop the animation
});


/** Aside */

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'), // Select all `li` elements
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length; // Get total number of sections

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a'); // Select the anchor tag inside each `li`
    a.addEventListener('click', function () {
        // Remove 'back-section' class from all sections
        removeBackSection();

        // Add 'back-section' to the previously active section
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active'); // Remove 'active' from all links
        }

        this.classList.add('active'); // Add 'active' to the clicked link
        showSection(this); // Show the target section
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}
function addBackSection(num) {
    allSection[num].classList.add('back-section');
}
function removeBackSection () {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}
// Function to show the target section
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active'); // Hide all sections
    }
    const target = element.getAttribute('href').split('#')[1]; // Extract the section ID
    document.querySelector("#" + target).classList.add('active'); // Show the target section
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[1].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    showSection(this);
    updateNav(this);
    removeBackSection(); 
    addBackSection(sectionIndex)
})

const navToggleBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navToggleBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navToggleBtn.classList.toggle('open');

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}