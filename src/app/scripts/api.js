import {displayPokemon} from "./list";

const fetchAllPokemon = () =>{
    //contenedor vacio
    const promises = [];
    //buscamos los 150 pokemon
    for(let i=1; i<=150; i++){
        //end point
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        //añadimos a nuestro array los fetch en forma de json
        promises.push(fetch(url).then((res)=>res.json()));
    }
    //resolvemos promesas
    Promise.all(promises).then((results)=>{
        //guardamos respuesta en pokemon y mapeamos
        const pokemon = results.map((result)=>({
            name:result.name,
            image:result.sprites["front_default"],
            type:result.types.map((type)=>type.type.name).join(', '),
            id:result.id,
        }));
        //llamamos a la funcion de pintado
        displayPokemon(pokemon);
    });
    };
    
    export {fetchAllPokemon};
    