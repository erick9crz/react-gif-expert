import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Componente para agrupar todos los elementos requeridos 
// de cada categoria algo como si fuera un <ol></ol> o un <li></li>
export const GifGrid = ({ category }) => {
	// Declaracion de un Hook (useFetchGifs)
	const { images,  isLoading} = useFetchGifs( category );

	return (
		<>	
			{
				// Si isLoading es = true entonces crea el elemento h2 si no no crea nada
				isLoading && (<h2>Cargando...</h2>)
			}
			<h3> {category} </h3>
			<div className="c-card__grid">
				{
					images.map( (image) => (
						<GifItem 
							key={ image.id}
							// title={ image.title}
							// url={ image.url}
							// forma mas sencilla de esparcir todas las propiedades asi tenga 100
							// que esto seria como las lineas de arriba comentadas
							{ ...image }
						/>
					))
				}
			</div>
		</>
	)
}