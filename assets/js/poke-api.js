
const pokeApi = {}

function convertDetailToPokemon(pokemonDetail){
    // pokemons info
    const pokemon = new Pokemon();
    pokemon.number = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;

    const types = pokemonDetail.types.map((typeSlot)=> typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default ;

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon)=>{
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((Response) => Response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails);

}

