
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
//     // navbar.classList.toggle('translucent');
// }
// document.getElementById('about-content').addEventListener('click', function () {
//     const aboutSection = document.getElementById('about');
//     aboutSection.scrollIntoView({ behavior: 'smooth' });
// });


// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }
// document.querySelectorAll('.navbar a').forEach(link => {
//     link.onclick = () => {
//         menu.classList.remove('bx-x');
//         navbar.classList.remove('active');
//     };
// });


// const typed = new Typed('.multiple-text', {
//     strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weightlifting', 'Running'],
//     typeSpeed: 60,
//     backSpeed: 60,
//     backDelay: 1000,
//     loop: true,
// });


// Navbar functionality
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// Smooth scroll for About section
document.getElementById('about-content').addEventListener('click', function () {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Typed.js for dynamic text
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weightlifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});
