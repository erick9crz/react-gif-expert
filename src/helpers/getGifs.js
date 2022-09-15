// Funcion para llemar a la api y obtener las imagenes
export const getGifs = async ( category ) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=ZrtXId0jlbZaNAybcSOTFbdm8XO54PL8&q=${ category }&limit=10`;
	// realizar la peticion http
	const resp = await fetch( url );

	// Obtenemos la data desestructurando, el cual viene del await resp
	const { data } = await resp.json();

	// variable retornara un objeto con ciertos propiedades por cada img
	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	// console.log(gifs);
	return gifs;
}