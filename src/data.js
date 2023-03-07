import data from './data/pokemon/pokemon.js';


const todos = (data) => {
  return data.pokemon.map((pokemon) => pokemon);
};

const pokemons = todos(data);

export const ordenarPokemons = (valorRecebido) => {
  let tipoOrdenacao = valorRecebido.value;

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
  let primeiraLetra = letraSelecionada.value;

  let pokemonsSelecionados = pokemons.filter((pokemon) => {
    if (pokemon.name[0] === primeiraLetra) {
      return pokemon;
    };
  });
  return pokemonsSelecionados;
};

export const filtrarPorTipo = (tipoSelecionado) => {
  let tipoPokemon = tipoSelecionado.value;

  let pokemonsSelecionados = pokemons.filter((pokemon) => {
    let tipoFiltro = pokemon.type.filter((tipo) => {
      return tipo === tipoPokemon;
    });
    if (tipoFiltro.length > 0) {
      return true;
    };
  });
  return pokemonsSelecionados;
}
