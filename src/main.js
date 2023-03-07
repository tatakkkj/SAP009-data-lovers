import {ordenarPokemons,filtrarPorLetra,filtrarPorTipo} from './data.js';

const dataPokemon = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.map((dataPokemon) => {
    document.querySelector('#paint-template').appendChild(dataforCharacter(dataPokemon));
  });
};

const dataforCharacter = (pokemon) => {
  const template = document.createElement('fixed');
  template.className = 'template-holder-character';
  template.innerHTML = `
    <div class="card">
        <div class="front">
            <h2>${pokemon.name}</h2>
            <div class ="imagens"><img class=images src=${pokemon.img}></div>
        </div>
        <div class="back">
        <h2>${pokemon.name}</h2>
        <ul class="info-list">
            <li>Tipo: ${pokemon['type']}</li>
            <li>Altura: ${pokemon.size['height']}</li>
            <li>Peso: ${pokemon.size['weight']}</li>
            <li>Ovo: ${pokemon['egg']}</li>
            <li>Chance de spawn: ${pokemon['spawn-chance']}</li>
            <li>Buddy distância Km: ${pokemon['buddy-distance-km']}</li>
        
        </ul>

        </div>
    </div>`;
  return template;
}

const sort = document.querySelector("#orderAz");

sort.addEventListener('change', () => {
  const pokemonsSelecionados = ordenarPokemons(sort);
  dataPokemon(pokemonsSelecionados);
});


const selecionarPorLetra = document.querySelector("#alphabetical-order");

selecionarPorLetra.addEventListener('change', () => {
  const pokemonsSelecionados = filtrarPorLetra(selecionarPorLetra);
  dataPokemon(pokemonsSelecionados);
});

const tipoPokemon = document.querySelector("#type-pokemon");

tipoPokemon.addEventListener('change', () => {
  const pokemonsSelecionados = filtrarPorTipo(tipoPokemon);
  dataPokemon(pokemonsSelecionados);
});

