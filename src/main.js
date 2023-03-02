import data from './data/pokemon/pokemon.js';
import {todos} from './data.js';

const pokemons = todos(data);

const select = document.querySelector("#type-pokemon");
select.addEventListener("change", tipoPokemon);
function tipoPokemon (event){
  console.log(event.target.value)

}

const dataforCharacter = (pokemon) => {
  const template = document.createElement('fixed');
  template.className = 'template-holder-character';
  template.innerHTML = `
    <div class="card">
        <div class="front">
            <h2>${pokemon.name}</h2>
            <div class ="imagens"><img src=${pokemon.img}></div>
        </div>`;
  return template;
}

const dataPokemon = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.map((dataPokemon) => {
    document.querySelector('#paint-template').appendChild(dataforCharacter(dataPokemon));
  });
};



dataPokemon(pokemons);