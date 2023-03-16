export const ordenarPokemons = (valorRecebido, data) => {
  const tipoOrdenacao = valorRecebido.value;

  if (tipoOrdenacao === 'az') {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (tipoOrdenacao === 'za') {
    return data.sort((a, b) => {
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

export const filtrarPorLetra = (letraSelecionada, data) => {
  const primeiraLetra = letraSelecionada.value;

  const pokemonsSelecionados = data.filter((pokemon) => {
    if (pokemon.name[0] === primeiraLetra) {
      return pokemon;
    }
  });
  return pokemonsSelecionados;
};

export const filtrarPorTipo = (tipoSelecionado, data) => {
  const tipoPokemon = tipoSelecionado.value;

  const pokemonsSelecionados = data.filter((pokemon) => {
    const tipoFiltro = pokemon.type.filter((tipo) => {
      return tipo === tipoPokemon;
    });
    if (tipoFiltro.length > 0) {
      return true;
    }
  });
  return pokemonsSelecionados;

}