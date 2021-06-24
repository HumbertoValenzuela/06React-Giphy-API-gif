// 7._Componente_AddCategory
// Crear carpeta components-archivo AddCategory.js

// Snippets: rafc Crea un import de react export de addcategory y crea un return
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Ir a GifExpertApp.js

export const AddCategory = ({setCategories}) => {
    // La caja de texto debe tener un useState, para saber lo que se escribe
    // const [inputValue, setInputValue] = useState('Hola Mundo');

    // Warning: A component is changing an uncontrolled input to be controlled.
    // const [inputValue, setInputValue] = useState();//undefined 

    const [inputValue, setInputValue] = useState('');

    // Manejo onChange
    const handleInputChange = e => {
        // console.log(e.target.value) // para ver el valor
        setInputValue(e.target.value);       
    }

    // Formulario form
    const handleSubmit = e => {
        e.preventDefault();
        
        // Elimina espacio en blanco inicio y final. 3Caracteres minimo
        if (inputValue.trim().length > 3) {
            
            setCategories( (category) => [inputValue,...category ]); 
            setInputValue('');// para resetear useState y el botón vuelva a quedar vacio    
        }        
    };

    return (     
        <div className="cuerpo animate__animated animate__bounceInUp">               
            <form className="cuerpo-wrapper" onSubmit={handleSubmit}>   
                <div className="input-data">        
                    <input 
                        type="text"
                        value={inputValue}
                        // onChange se gatilla cada vez que el evento cambie
                        onChange={handleInputChange}
                        required
                    /> 
                    <div className="underline"></div>
                    <label>Busca tu Gif</label>
                </div>
            </form>
        </div>
    )
}

AddCategory.propTypes = {
setCategories: PropTypes.func.isRequired
}