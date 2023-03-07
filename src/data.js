import data from './data/pokemon/pokemon.js';


const todos = (data) => {
  const resultado = data.pokemon.map((pokemon) => pokemon);
  return resultado;
};

const pokemons = todos(data);

export const ordenarPokemons = (sort) => {
  const tipoOrdenacao = sort.value;

  if (tipoOrdenacao === 'az') {
    return pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (tipoOrdenacao === 'za') {
    return pokemons.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
};

export const filtrarPorLetra = (letraSelecionada) => {
  const primeiraLetra = letraSelecionada.value;

  const pokemonsSelecionados = pokemons.filter((pokemon) => {
    if (pokemon.name[0] === primeiraLetra) {
      return pokemon;
    }
  });
  return pokemonsSelecionados;
};

export const filtrarPorTipo = (tipoSelecionado) => {
  const tipoPokemon = tipoSelecionado.value;

  const pokemonsSelecionados = pokemons.filter((pokemon) => {
    const tipoFiltro = pokemon.type.filter((tipo) => {
      return tipo === tipoPokemon;
    });
    if (tipoFiltro.length > 0) {
      return true;
    }
  });
  return pokemonsSelecionados;
}