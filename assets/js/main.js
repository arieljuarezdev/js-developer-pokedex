const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')

const maxRecord = 151;
const limit = 12;
let offset = 0;

function loadPokemonItems(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <a href="./infoPokemon.html" onclick="idStorage(${pokemon.number})">
            <li id="${pokemon.number}" class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div>
            </li>
            </a>
        `).join('')

        pokemonList.innerHTML += newHtml

    })
}

loadPokemonItems(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecord) {
        const newLimit = maxRecord - offset;
        loadPokemonItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore);
    } else {
        loadPokemonItems(offset, limit)
    }

})

function idStorage(id){
    sessionStorage.setItem("id",id.toString())
}


