//OTRA FORMA DE HACERLO CON CLASES

/* 
    const fetchPokemonSearch = async (pokeName) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
        const res = await fetch(url).catch((error) =>{
            const pokedex = document.getElementById("pokedex");
            const pokemonHTMLString =
            `
            <div class="flex-item">
                <p class="flex-item-error">Error: Hubo un problema con la petición de Fetch: ${error.message}</p>
            </div>
            `
            pokedex.innerHTML = pokemonHTMLString;
        });
        const data = await res.jason():
        let pokemon = {
            name: data.name,
            image: data.sprites["front_default"],
            type: data.type.map((type) => type.type.name).join(", "),
            id: data.id,
            attack: data,
            weight: data.weight,
        };
        return pokemon;
    };

    class PokeClass {
        constructor(id, name, image, type){
            this.id = id;
            this.name = name;
            this.image = image;
            this.type = type;
        }

        getPokemonId(){
            return this.id;
        }

        getPokemonName(){
            return this.name;
        }
        
        getPokemonImg(){
            return this.image;
        }

        getPokemonType(){
            return this.type;
        }
    }

    class PokeDetailClass extends PokeClass{
        constructor(id, name, image, type, attacks){
            super(id, name, image, type);
            this.attacks = attacks;
        }
        getPokemonAttacks(){
            return this.attacks;
        }
    }

    class PokeRandomizer extends PokeClass{
        constructor(id, name, image, type, weight){
            super(id, name, image, type);
            this.weight = weight;
        }
        getPokemonAttacks(){
            return this.weight;
        }
    }


//utiles

class PokeUtil

    export {}; */