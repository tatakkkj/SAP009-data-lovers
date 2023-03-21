import {filtrarPorTipo, calcular, filtrarPorLetra, ordenarPokemons} from '../src/data.js';

const bulbasaur = { 

  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
}
const pikachu = {
  "num": "025",
  "name": "pikachu",
  "type": [
    "electric"
  ],
}

const haunter = {
  "num": "093",
  "name": "haunter",
  "type": [
    "ghost",
    "poison"
  ],
}

const gastly = {
  "num": "092",
  "name": "gastly",
  "type": [
    "ghost",
    "poison"
  ],
}

const gengar = {
  "num": "094",
  "name": "gengar",
  "type": [
    "ghost",
    "poison"
  ],
}

const charmander ={
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
}

const pokemons = [bulbasaur, pikachu, haunter, charmander, gastly, gengar]


// Teste filtrar por tipo

it ("deve filtrar pokemons por tipo", () =>{
  const resultado = filtrarPorTipo("electric", pokemons)
  expect (resultado).toEqual([pikachu])
});

// Teste filtrar por letra

describe('deve filtrar por letra', () => {
  test('is a function', () => {
    expect(typeof filtrarPorLetra).toBe('function');
  });

  it('retornar os personagens que possui a letra inserida', () => {
    const valueLetraSelecionada1 = "b"
    const valueLetraSelecionada2 = "c"

    expect(filtrarPorLetra(valueLetraSelecionada1, pokemons)).toEqual([bulbasaur]);
    expect(filtrarPorLetra(valueLetraSelecionada2, pokemons)).toEqual([charmander]);
  });
});

// Teste calculo agregado

describe("deve mostrar a porcentagem daquele tipo de pokemon", () => {
  it('is a function', () => {
    expect(typeof calcular).toBe('function');
  });

  it('Should return a calculation based on two numbers', () => {
    expect(calcular(5,10)).toEqual("50.00");
    expect(calcular(2,10)).toEqual("20.00");
  });
});


// Teste de ordenação A-Z e Z-A

describe("ordernar AZ e de ZA", () => {
  test('is a function', () => {
    expect(typeof ordenarPokemons).toBe('function');
  });

  it ('deve retornar pokemons por ordem', () => {
    const valueAZ = "az"
    const valueZA = "za"
    expect(ordenarPokemons(valueAZ, pokemons)).toEqual([bulbasaur, charmander, gastly, gengar, haunter, pikachu]);
    expect(ordenarPokemons(valueZA, pokemons)).toEqual([pikachu, haunter, gengar, gastly, charmander, bulbasaur]);
  });
})
