const burgerIcone = document.querySelector('.burger-icon');
const itemsOfMenu = document.querySelectorAll('.nav__item')
const body = document.querySelector('body')

burgerIcone.addEventListener('click', () => {
    body.classList.toggle('body--opened-burger');
})

itemsOfMenu.forEach(itemOfMenu => {
    itemOfMenu.addEventListener('click', () => {
        body.classList.remove('body--opened-burger')
    })
})