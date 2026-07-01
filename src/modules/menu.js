const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')

	const menuList = menu.querySelector('ul')
	const closeBtn = menu.querySelector('.close-btn')
	const menuItems = menu.querySelectorAll('ul>li>a')

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', handleMenu)

	menu.addEventListener('click', e => {
		const target = e.target

		if (target.classList.contains('close-btn')) {
			menu.classList.remove('active-menu')
			e.preventDefault()
			return
		}

		if (target.tagName === 'A' && menuList.contains(target)) {
			menu.classList.remove('active-menu')
		}
	})
}

export default menu
