export const getAllPokemon = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const getPokemonByName = async (_name) => {
    let url = 'http://localhost:4444/pokemon';
    if(_name.length !== 0){
        url += '?name=' + _name;
    }
    const response = await fetch(
        url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}