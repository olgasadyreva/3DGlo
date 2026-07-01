const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const menuList = menu.querySelector('ul')	

	const handleMenu = (e) => {
		const target = e.target
		
		if (target === menuBtn || menuBtn.contains(target)) {
			menu.classList.toggle('active-menu')
			e.preventDefault()
			return
		}
		
		if (target.classList.contains('close-btn')) {
			menu.classList.remove('active-menu')
			e.preventDefault()
			return
		}
		
		if (target.tagName === 'A' && menuList.contains(target)) {
			menu.classList.remove('active-menu')
			return
		}

		if (menu.classList.contains('active-menu')) {
			if (!menu.contains(target) && target !== menuBtn && !menuBtn.contains(target)) {
				menu.classList.remove('active-menu')
			}
		}
	}

	document.addEventListener('click', handleMenu)
}

export default menu
