export const ordenarPokemons = (valorRecebido, data) => {
  const tipoOrdenacao = valorRecebido;

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

  const pokemonsSelecionados = data.filter((pokemon) => {
    if (pokemon.name[0] === letraSelecionada) {
      return pokemon;
    }
  });
  return pokemonsSelecionados;
};

export const filtrarPorTipo = (tipoSelecionado, data) => {

  const pokemonsSelecionados = data.filter((pokemon) => {
    const tipoFiltro = pokemon.type.filter((tipo) => {
      return tipo === tipoSelecionado;
    });
    if (tipoFiltro.length > 0) {
      return true;
    }
  });
  return pokemonsSelecionados;

}

export const calcular = (selecionados, todos) => {
  return ((selecionados / todos * 100)).toFixed(2);
}
