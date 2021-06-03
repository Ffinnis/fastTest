//Открытие вопросов

let openArrow = document.querySelectorAll('.question-item__text')
let toggleText = document.querySelectorAll('.toggle-text')

for(let i = 0; i<openArrow.length; i++) {
    openArrow[i].addEventListener('click', () => {
        toggleText[i].classList.toggle('active')

    })
}

//Открытие контактов

let contactsToggle = document.querySelector('.contacts-toggle')
let contactsBlock = document.querySelector('.contacts-block')

contactsToggle.addEventListener('click', () => {
    contactsToggle.classList.toggle('active')
    contactsBlock.classList.toggle('active')
    if(contactsBlock.classList.contains('active')) {
        contactsBlock.style.animation = '1s ease-in showContactsBlock forwards'
    }
})



//Карусель отзывов
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
    swiper.slideNext();
})

