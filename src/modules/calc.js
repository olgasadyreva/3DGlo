const calc = () => {
	const inputCalcItems = document.querySelectorAll('.calc-item:not(select)')
	const forms = document.querySelectorAll('form')
	const inputsTypeText = document.querySelectorAll('form input[type="text"]')
	const inputsTypeEmail = document.querySelectorAll('input[type="email"]')
	const inputsTypeTel = document.querySelectorAll('input[type="tel"]')

	inputCalcItems.forEach(item => {
		item.addEventListener('input', e => {
			e.target.value = e.target.value.replace(/\D+/, '')
		})
	})

	// Для текстовых полей - кириллица, дефис и пробел
	inputsTypeText.forEach(input => {
		input.addEventListener('input', e => {
				e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s-]/g, '')
		})
	})

	// Для email - латиница, цифры и разрешенные спецсимволы
	inputsTypeEmail.forEach(input => {
		input.addEventListener('input', e => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '')
		})
	})

	// Для телефона - цифры, круглые скобки и дефис
	inputsTypeTel.forEach(input => {
		input.addEventListener('input', e => {
			e.target.value = e.target.value.replace(/[^0-9()\-]/g, '')
		})
	})
}

export default calc
