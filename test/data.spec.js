import {filtrarPorTipo} from '../src/data.js';

const bulbasaur = { 
  "name": "bulbasaur",
  "type": ["grass","poison"],
}

const pikachu = {
  "name": "pikachu",
  "type": ["electric"],
}

const haunter = {
  "name": "haunter",
  "type": ["ghost","poison"],
}

const pokemons = [bulbasaur, pikachu, haunter]

it ("deve filtrar pokemons por tipo", () =>{
  const resultado = filtrarPorTipo(pokemons,["ghost"])
  expect (resultado).toEqual([haunter])
});
