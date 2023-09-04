
const detailStats = {};

function convertToPokemonStats(pokemonDetail){
    const stats = new PokeStats();
    
    const names = pokemonDetail.stats.map((statSlot)=>statSlot.stat.name);
    stats.sttName = names;

    const values = pokemonDetail.stats.map((statSlot)=> statSlot.base_stat);
    stats.sttValue = values;

    stats.name = pokemonDetail.name;
    stats.height = pokemonDetail.height;
    stats.weight = pokemonDetail.weight;
    stats.photo = pokemonDetail.sprites.other.dream_world.front_default ;

    console.log(stats)
    return stats
}

detailStats.getPokemon = (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then((Response) => Response.json())
        .then(convertToPokemonStats)
}
