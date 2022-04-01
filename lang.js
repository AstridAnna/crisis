const switcher = document.querySelector('.lang')
const nl = document.querySelector('.nl')
const en = document.querySelector('.en')
const state = {
  lang: 'nl'
}

function changeLang(lang) {
  state.lang = lang
  localStorage.setItem('lang', lang)
  document.body.classList.remove('--en', '--nl')
  document.body.classList.add(`--${lang}`)
}

nl.addEventListener('click', () => changeLang('nl'))
en.addEventListener('click', () => changeLang('en'))

changeLang(localStorage.getItem('lang') || 'nl')