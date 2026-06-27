const modal = () => {
	const modal = document.querySelector('.popup')
	const buttons = document.querySelectorAll('.popup-btn')
	const closeBtn = modal.querySelector('.popup-close')

	const isMobile = () => {
		return window.innerWidth < 768
	}

	// Функции для easing (законы изменения анимации)
	const timingFunctions = {
		// Линейная анимация
		linear: (timeFraction) => timeFraction,
		
		// Ease-in (ускорение в начале)
		easeIn: (timeFraction) => timeFraction * timeFraction,
		
		// Ease-out (замедление в конце)
		easeOut: (timeFraction) => 1 - Math.pow(1 - timeFraction, 3),
		
		// Ease-in-out (ускорение и замедление)
		easeInOut: (timeFraction) => {
			if (timeFraction < 0.5) {
				return 2 * timeFraction * timeFraction
			} else {
				return 1 - Math.pow(-2 * timeFraction + 2, 2) / 2
			}
		},
		
		// Эффект "пружины" (bounce)
		bounce: (timeFraction) => {
			for (let a = 0, b = 1; 1; a += b, b /= 2) {
				if (timeFraction >= (7 - 4 * a) / 11) {
					return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
				}
			}
		}
	}

	const animateModal = (timing, draw, duration) => {
		let start = performance.now()

		let requestId = requestAnimationFrame(function animateModal (time) {
			let timeFraction = (time - start) / duration
			if (timeFraction > 1) timeFraction = 1

			let progress = timing(timeFraction)

			draw(progress)

			if (timeFraction < 1) {
				requestAnimationFrame(animateModal)
			}
		})
		return requestId 
	}

	const openModal = () => {
		modal.style.display = 'block'

		// Если мобильное устройство - показываем без анимации
		if (isMobile()) {
			modal.style.opacity = '1'
			modal.style.transform = 'scale(1) translateY(0)'
			return
		}
		
		modal.style.opacity = 0
		modal.style.transform = 'scale(0.8) translateY(-50px)'
		
		animateModal(
			timingFunctions.easeOut,
			(progress) => {
				modal.style.opacity = progress
				modal.style.transform = `scale(${0.8 + 0.2 * progress}) translateY(${-50 + 50 * progress}px)`
			},
			500
		)
	}

	const closeModal = () => {
		// Если мобильное устройство - закрываем без анимации
		if (isMobile()) {
			modal.style.display = 'none'
			return
		}

		animateModal(
			timingFunctions.easeIn,
			(progress) => {
				modal.style.opacity = 1 - progress
				modal.style.transform = `scale(${1 - 0.2 * progress}) translateY(${50 * progress}px)`
			},
			300
		)

		setTimeout(() => {
			modal.style.display = 'none'
		}, 300)
	}

	// отмена запланированного запуска callback
//cancelAnimationFrame(requestId);

	buttons.forEach(btn => {
		btn.addEventListener('click', openModal)
	})

	closeBtn.addEventListener('click',closeModal)
	
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal()
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.style.display === 'block') {
			closeModal()
		}
	})

	window.addEventListener('resize', () => {
		if (modal.style.display === 'block' && isMobile()) {
			modal.style.opacity = '1'
			modal.style.transform = 'scale(1) translateY(0)'
		}
	})
}

export default modal
