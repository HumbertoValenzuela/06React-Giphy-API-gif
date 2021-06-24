import React from 'react'
// rafc
export const GifGridItem = ({ title, url}) => {//(props) => {
    // console.log(props.img);
    // console.log(id, title, url);
    return (
        <div className="card ">
            <span></span>
            <div className="content">              
                <img src={url} alt={title} />
                <p> {title} </p>
            </div>
        </div>
    )
}

// Custom Hook es una forma extraer lógica de algún componente o reutilizar y extraerla de tal manera que sea sencillo utilizarla
