const pokeDetail = document.getElementById('pokeDetail');

function getID() {
    pokeID = sessionStorage.getItem('id');

    detailStats.getPokemon(pokeID).then((stats) => {
        const details = `
            <div class ="content">
                <h1> ${stats.name} <h1>
                <hr>
                <div id='pokeImg'>
                    <img src="${stats.photo}"
                </div>
                <hr>

                <p> Details </p>
                <div class="details">
                    <p> Height: ${stats.height}</p>
                    <p> Weight: ${stats.weight}</p>
                </div>
                
                <hr>
                <h3> Status </h3>
                <div class="status">
                    <ol>
                        <li>${stats.sttName[0]}: ${stats.sttValue[0]}</li>
                        <li>${stats.sttName[1]}: ${stats.sttValue[1]}</li>
                        <li>${stats.sttName[2]}: ${stats.sttValue[2]}</li>
                        <li>${stats.sttName[3]}: ${stats.sttValue[3]}</li>
                        <li>${stats.sttName[4]}: ${stats.sttValue[4]}</li>
                        <li>${stats.sttName[5]}: ${stats.sttValue[5]}</li>
                        
                    </ol>
                </div>
            </div>
            
        `
        pokeDetail.innerHTML += details;
        // console.log(details)

    })

}
console.log(pokeDetail)





