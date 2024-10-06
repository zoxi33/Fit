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
window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar')
	const navbarDesktop = document.querySelector('.navbar-dekstop')
	if (window.scrollY > 50) {
		// Wartość scrolla, po której dodasz tło

		navbar.classList.add('scrolled')
		navbarDesktop.classList.add('scrolled')
	} else {
		navbar.classList.remove('scrolled')
		navbarDesktop.classList.remove('scrolled')
	}
})
