

let pokemon;

function setActivePokemon(rawData) {
  pokemon = rawData;
  console.log(pokemon);

  let display = document.getElementById("foundPokemon");
  let title = `A wild ${pokemon.name} has appeared!`;
  let img = pokemon.sprites.front_shiny;

  display.innerHTML = `
  <div>
    ${title}
  </div>
  <img src="${img}" alt="error loading image" >
  `


}

function getFromApi(id) {
  const url = "https://pokeapi.co/api/v2/pokemon/151"
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(res => {
      setActivePokemon(res)
    })
    .catch(err => {
      console.error(err);
    });
}

function findRandomPokemon() {
  let id = Math.floor(Math.random() * 151);

  getFromApi(id);
}
