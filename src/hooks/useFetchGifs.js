import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";
// Custom Hook pueden funcionan como un Functional components. Pueden usar efectos, reducer, contextos.

//Custom Hook
export const useFetchGifs = ( category ) => {
    //Estado
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Evaluar useEffect cuando la category cambia
    useEffect( () => {
        // getGifs es una Promise. Petición http
        getGifs(category)
            //Ponemos las imagenes 
            .then( imgs => {
                //setState dispara una renderización del componente GifGrid
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])   

    return state // {data:[], loading:true}
}