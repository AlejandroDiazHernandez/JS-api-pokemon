import {fetchPokemonRandom, fetchPokemonSelect} from './scripts/list';
import {fetchAllPokemon} from "./scripts/api";
import {viewAboutMe, viewBackToPokedex} from "./scripts/views";
import './styles/styles.scss'; 

// Funcion para añadir listeners en el html
function addListeners() {
    document.getElementById("pokeList").addEventListener("click", fetchAllPokemon);
    document.getElementById("pokeRandom").addEventListener("click", fetchPokemonRandom);
    document.getElementById("pokeFind").addEventListener("click", fetchPokemonSelect);
    document.getElementById("aboutMe").addEventListener("click", viewAboutMe);
    document.getElementById("backToPokedex").addEventListener("click", viewBackToPokedex);
}

window.onload = function () {
    // Añade Eventos -> Para que la ventana escuche eventos
    addListeners();
  };

