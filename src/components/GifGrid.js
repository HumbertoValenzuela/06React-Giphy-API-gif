import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

// Componente
export const GifGrid = ({category}) => {
    
    // Llamado a custom Hook
    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <div className="titulando">
            <h3> { category } </h3>
            </div>
            

            {loading && <p>Loading...</p>}

            <div className="card-grid">
            {                
                images.map( img => (
                    <GifGridItem 
                        key= {img.id}                       
                        {...img}
                    />
                ))
            }  
            </div>
        
        </>
        
    )
}

// npm run build