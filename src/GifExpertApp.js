// 5._GifExpertApp_-_Component
// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Lista de Categorías y mostrar en pantalla
// Componente FC
export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // 7._Componente_AddCategory comentar const handleAdd = () =>.  Y el boton
    // const handleAdd = () => {
        // setCategories([...categories, 'Hunter x Hunter'])
        // Otra forma de hacerlo
        // setCategories( catego => [...catego, 'Hunter x Hunter'])
    // };

    return (
        <>
            <div className="contenedor-glitch animate__animated animate__fadeInLeft">
             <h2 className="glitch ">
                 <span aria-hidden="true">Gif API App</span>Gif API App<span aria-hidden="true">Gif API App</span></h2>
            </div>
            
            {/* Agregar AddCategory y importar */}
            <AddCategory setCategories={setCategories}/>
            
            {/* <button onClick={handleAdd}>Agregar</button> */}
            {/*En código html los muestra separados*/}
            {/* Lista Ordenada, expresión de JS que regrese un valor */}
            <ol>
                {/* index.js:1 Warning: Each child in a list should have a unique "key" prop. */}
                {/* {categories.map(category => <li>hola</li>)} */}

                {/* No se hace: colocar el valor indice de map */}
                {/* {categories.map((category, indice) => <li>{indice} hola</li>)} Resultado de indice es 0 1 2 */}
                {/* {categories.map((category, indice) => <li>{indice + 1} hola</li>)} resultado de indice 1 2 3 */}
                {/* Aquí el Warning se va, pero esto no se hace ¿Porque? es volatil, por que por ej posible  */}
                {/* que el primer elemento se elimina, pero el primer indice 0 se mantiene solo disminuye el último. Por lo que no se tendrá un resultado esperado */}
                {/* {categories.map((category, indice) => <li key={indice}> hola</li>)} */}

                {/* La solución. Tener cuidado que no se repita un elemento, se obtiene un error, es este:*/}
                {/* Warning: Encountered two children with the same key, `One Punch`. Keys should be unique */}

                
                {
                    categories.map( category => (
                        // <li key={category}> {category}</li>
                        <GifGrid
                            key = { category } 
                            category = { category } 
                        />
                    ))
                }
 
                {/* Esto tiene un inconveniente: Si necesito agregar un elemento con el botón, No se podrá por  */}
                {/* varias razones 1 Array es un const, 2 Como le digo a React que hubo un cambio en estas */}
                {/* categorias y necesito que vuelva a renderizar el <ol>. Comentar el const Array */}
                {/* y agregar arriba const [categories, setCategories] = useState. Funcionará igual, pero con un */}
                {/* warning que setCategories aún no se usa */}
            </ol>
        </>
    );
}
