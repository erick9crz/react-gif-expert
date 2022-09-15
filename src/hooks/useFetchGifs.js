import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Un hook no es mas que solo una función que retorna algo
export const useFetchGifs = ( category ) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async() => {
		const newImages = await getGifs( category );
		setImages(newImages);
		setIsLoading(false);
	}

	// Permite solo ejecutar el componente cuando este solo detecte 
	// una nueva entrada (al escribir un nuevo gif a buscar) 
	useEffect( () => {
		getImages();
	}, []);




	return {
		images: images,
		isLoading: isLoading 
	}
}
