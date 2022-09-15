import { useState } from 'react';
// Este es un archivo de barril que me ayuda a importar solo un archivo el cual es el index y que se ubica dentro de los componentes (js) y este a su ves contiene todos los componentes (.jsx)
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {
	/** 
	 * Forma de crear un espacio de memoria y asi 
	 * poder manejar las categorias (utilizando)
	 * useState
	*/ 
	const [categories, setCategories] = useState([ 'One Punch' ]);

	// Funcion para agregar una nueva categoria al click
	const onAddCategory = (newCategory) => {
		// Validacion para que no se ingrese el mismo texto mas de una vez
		if (categories.includes(newCategory)) return;

		// Para agregar una nueva lo que se tiene que hacer 
		// es una copia de las categorias y posterios agregar la nueva
		// utilizando el operador expret
		setCategories([newCategory, ...categories])

		// console.log(newCategory);
	}


	return (
		<div className='container'>
			{/* TITULO */}
			<h1>GifExpertApp</h1>

			{/* INPUT el cual se le mandara una propiedad (en este caso una funcion)*/}
			{/* <AddCategory setCategories={setCategories} /> */}

			<AddCategory 
				onNewCategory={ (value) => onAddCategory(value) }
			
			/>


			{/* LISTADO DE GIF */}
			{/* <button onClick={onAddCategory}>Agregar</button> */}
			
			{/* Esta es la forma de representar un arreglo en html
				y representarla como item´s */}
				{/* Key es el valor de la llave ya que si no se coloca
				este nos mandar un warning en console */}
			
			{ 

				categories.map( (category) => (
					<GifGrid 
						key={ category } 
						category={ category } 
					/>
				))
				
				
				
				
				// Manera de enlistar las categorias utilizando <li></li>
				// categories.map( category => {
				// 	return <li key={category}> {category} </li>
				// })
			}
			
		</div>
	)
};