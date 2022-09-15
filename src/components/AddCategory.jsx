import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	// Funcion que habilita el onchange handler y 
	// se pueda hacer el cambio en el input
	const onInputChange = ({target}) => {
		// setInputValue permite reeplazar el value del input
		setInputValue(target.value)
	}

	// Realiza el submit del formulario e inserta la 
	// nueva categoria al dar enter
	const onSubmit = (e) => {
		e.preventDefault();

		// Condiciona para validar que en input se ingresen 
		// mas de un carcater para poder agregarlo a la lista
		// si no termina la ejecucion de l funcion 
		if (inputValue.trim().length <=1) return;

		// Agrega la nueva categoria
		// setCategories(categories => [ inputValue, ...categories ]);
		onNewCategory( inputValue.trim() );


		// Limpia el input al dar enter
		setInputValue('');
	}

	return (
		<form action='#' onSubmit={(e) => onSubmit(e)}>
			<fieldset>
				<input type='text' placeholder='Buscar Gifs' value={inputValue} onChange={onInputChange} />
			</fieldset>
		</form>
	)
}