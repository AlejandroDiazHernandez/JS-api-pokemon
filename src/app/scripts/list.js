//pintar lista
const displayPokemon = (pokemon) => {
    const pokedex = document.getElementById("pokedex");
    const pokemonHTMLString = pokemon
        .map(
            (pokemonDetail)=>
            `
            <li class="flex-item">
                <img class="flex-item-image" src="${pokemonDetail.image}"/>
                <h2 class="flex-item-title">${pokemonDetail.id}. ${pokemonDetail.name}</h2>
                <p class="flex-item-subtitle">Type: ${pokemonDetail.type} </p>
            </li>
            `
        )
        .join("");
        pokedex.innerHTML = pokemonHTMLString;
};
//buscar un pokemon
const fetchPokemonSelect = () =>{
    const pokeName = document.getElementById("pokeName").value;
    fetchPokemonSearch(pokeName);
};
//recibir un pokemon aleatorio
const fetchPokemonRandom = () =>{
    const pokeId = Math.round(Math.random() * (150-1) + 1);
    fetchPokemonSearch(pokeId);
};
//buscar un pokemon
const fetchPokemonSearch = (pokeName) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((pokemon) =>{
            displayPokemonDetail(pokemon);
        })
        .catch((error) =>{
            const pokedex = document.getElementById("pokedex");
            const pokemonHTMLString =
            `
            <div class="flex-item">
                <p class="flex-item-error">Error: Hubo un problema con la petición de Fetch: ${error.message}</p>
            </div>
            `
            pokedex.innerHTML = pokemonHTMLString;
        });
};  

//pintar 1 pokemon
const displayPokemonDetail = (pokemon) =>{
    const pokedex = document.getElementById("pokedex");
    console.log(pokemon);
    const pokeType = pokemon.types.map((type) => type.type.name).join("- ");
    console.log(pokeType);
    const pokeWeight = 
        pokemon.weight < 1000 ? "Not too much" : pokemon.weight >= 3000 ? "It's over 3 Thousand!!!" : "Danger";
    const pokemonHTMLString = 
    `
    <li class="flex-item">
        <img class="flex-item-image" src="${pokemon.sprites["front_default"]}"/>
        <h2 class="flex-item-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="flex-item-subtitle">Type: ${pokeType} </p>
        <p class="flex-item-subtitle">Weight: ${pokemon.weight} ${pokeWeight} </p>
    </li>
    `
    pokedex.innerHTML = pokemonHTMLString;
};

export {displayPokemonDetail, fetchPokemonSearch, fetchPokemonRandom, fetchPokemonSelect, displayPokemon};
