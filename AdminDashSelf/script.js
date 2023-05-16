const menuBtn = document.querySelector('.menu i');
const openNav = document.querySelector('nav');
const closeNav = document.querySelector('.closeBtn');

menuBtn.addEventListener('click', ()=> {
    openNav.style.display = 'flex';
})
closeNav.addEventListener('click', ()=> {
    openNav.style.display = 'none';
})