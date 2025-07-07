const body = document.querySelector('body')


// * navbar fixed
const navbar = document.querySelector('.navbar')
if (window.scrollY > 50) {
  navbar.classList.add('navbar--fixed')
} else {
  navbar.classList.remove('navbar--fixed')
}
function navbarFixed() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--fixed')
  } else {
    navbar.classList.remove('navbar--fixed')
  }
}
window.addEventListener('scroll', navbarFixed)

// * navbar fixed to mobile
function navbarFixedMobile() {
  if (window.screen.width <= 500) {
    const navbar = document.querySelector('.navbar')
    let scroll = window.scrollY
    if (scroll > 5) {
      navbar.classList.add('navbar--fixed')
    }
  }
}
window.addEventListener('scroll', navbarFixedMobile)

// * app keyboard
const displayKeyboard = document.querySelector('.display-keyboard')
const btnsClear = document.querySelector('.btns-keyboard__btn--clear')
const btnsKeyboard = document.querySelectorAll('.btns-keyboard__btn--main')
const btnBackspace = document.querySelector('.btns-keyboard__btn--backspace')
const btnshift = document.querySelector('.btns-keyboard__btn--shift')
const btnSpase = document.querySelector('.btns-keyboard__btn--spase')
const btnSpeciaCharactersOne = document.querySelector('.btns-keyboard__btn--special-characters-one')
const btnSpeciaCharactersTwo = document.querySelector('.btns-keyboard__btn--special-characters-two')
const btnSpeciaCharactersThree = document.querySelector('.btns-keyboard__btn--special-characters-three')
const btnSpeciaCharactersFour = document.querySelector('.btns-keyboard__btn--special-characters-four')
const btnSpeciaCharactersFive = document.querySelector('.btns-keyboard__btn--special-characters-five')


function showText(text) {
  displayKeyboard.textContent += text
}
btnsKeyboard.forEach(btn => {
  btn.addEventListener('click', () => {
    showText(btn.value)
  })
})

btnsClear.addEventListener('click', () => {
  displayKeyboard.textContent = ''
})

let loverCase = true
btnshift.addEventListener('click', () => {
  btnsKeyboard.forEach(btn => {
    btn.textContent = btn.textContent.toUpperCase()
    if (loverCase) {
      btnshift.classList.add('btns-keyboard__btn--active')
      btn.value = btn.textContent.toUpperCase()
      btn.textContent = btn.textContent.toUpperCase()
      btnSpeciaCharactersOne.value = '!'
      btnSpeciaCharactersTwo.value = '@'
      btnSpeciaCharactersThree.value = '#'
      btnSpeciaCharactersFour.value = '$'
      btnSpeciaCharactersFive.value = '%'
    } else {
      btnshift.classList.remove('btns-keyboard__btn--active')
      btn.value = btn.textContent.toLowerCase()
      btn.textContent = btn.textContent.toLowerCase()
      btnSpeciaCharactersOne.value = '1'
      btnSpeciaCharactersTwo.value = '2'
      btnSpeciaCharactersThree.value = '3'
      btnSpeciaCharactersFour.value = '4'
      btnSpeciaCharactersFive.value = '5'
    }
  })
  loverCase = !loverCase
})

btnBackspace.addEventListener('click', () => {
  let currentText = displayKeyboard.textContent
  let newText = currentText.slice(0, -1)
  displayKeyboard.textContent = newText
})

btnSpase.addEventListener('click', () => {
  displayKeyboard.textContent += btnSpase.value
})
