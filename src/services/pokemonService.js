const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

const pokemonService = () => fetch(endpoint).then(response => response.json());

export { pokemonService }