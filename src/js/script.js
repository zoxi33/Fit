const hamburgerBtn = document.querySelector('.hamburger-icon')
const menuMobile = document.querySelector('.menu-mobile')
const closeBtn = document.querySelector('.close-icon')
const allLinks = menuMobile.querySelectorAll('a')
const showNav = () => {
	menuMobile.classList.toggle('show-nav')
	allLinks.forEach(el => {
		el.addEventListener('click', () => {
			menuMobile.classList.remove('show-nav')
		})
	})
}

hamburgerBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('show-nav')
})
