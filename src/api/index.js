const fetchPokemon = async (id) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const result = await fetch(endpoint);
    const data  = await  result.json();

    return data; 
}

export default fetchPokemon;
