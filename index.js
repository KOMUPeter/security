const toggleButton = document.querySelector(".toggle-Button");
const navLinks = document.querySelector(".navbar-links");
const h1Title = document.querySelector('.h1');

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    h1Title.classList.toggle('active')
});
