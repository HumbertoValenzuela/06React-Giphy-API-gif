

     // Esto Funciona PERO la lógica tiene un problema
  export    const getGifs = async (category) => {
        // encodeURI para eliminar espacios en blancos entre otros
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zjBU1zbk914dIioL8unj5J6dXCkxaRjm`;        
        
        const resp = await fetch(url);
        // Si se hizo correctamente
        // resp.ok
        // La respuesta es en formato .json
        const { data } = await resp.json();

        // Extraer información
        // console.log(data);
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                // añadir ? para preguntar que si vienen las imagenes, entonces lo utilice
                url: img.images?.downsized_medium.url
            }
        })
        // console.log(gifs);
        // usar el useState, la función setImages, el nuevo estado será los gifs
        return gifs;
    }