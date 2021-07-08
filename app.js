const menu = document.querySelector('.menu-bar')
const nav = document.querySelector('#myLinks')

menu.addEventListener('click', function (e){

    nav.style.display === 'none' ? nav.style.display = 'block' : nav.style.display = 'none'
})